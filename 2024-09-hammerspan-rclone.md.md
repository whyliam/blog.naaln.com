---
layout: post
title: hammerspan 和 rclone 同步
date: 2024/09/07 22:39:00
categories:
  - 技术
tags:

---

由于公司电脑的资料和家里电脑的资料不同步，而我有个人的资料库希望在公司电脑上也可以查看。

因此我设置了 rclone 用于同步改资料库

## Rclone

### 安装 Rclone

```bash
brew install rclone
```

### 配置 Rclone

```bash
rclone config
```

以下是配置 rclone 的 WebDAV 的步骤:

1. 在 rclone config 中选择 "New remote"
2. 输入远程名称,例如 "webdav"
3. 选择类型为 "WebDAV"
4. 输入 WebDAV URL,例如 "https://example.com/webdav/"
5. 选择 WebDAV 供应商,如果是自建的选 "Other"
6. 输入用户名和密码
7. 选择是否编辑高级配置,通常选 "n"
8. 确认配置无误后保存
9. 测试连接:

```bash
rclone lsd webdav:/
```

1. 如果能正常列出目录,则配置成功

### 配置 Webdav 和 Icloud 同步

```bash
#!/bin/zsh
rclone bisync /Users/XXX/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/Afanty webdav:/Afanty --resync
```

## Hammerspan

### 安装 Hammerspan

```bash
brew install hammerspan
```

### 配置 Spoons

由于我也不会写 `.lua` 就直接用 cursor 生成了

```lua
-- 加载其他模块
local obsidianSync = require("obsidian_sync")
local blogSync = require("blog_sync")

-- 初始运行
obsidianSync.watchFolder()
blogSync.watchBlogFolder()

-- 每小时重新启动监控
hs.timer.doEvery(3600, function()
    print("重新启动文件夹监控")
    obsidianSync.watchFolder()
    blogSync.watchBlogFolder()
end)

print("文件夹监控已加载")
```

```lua
local M = {}

function M.debounce(func, delay)
    local timer = nil
    return function(...)
        local args = {...}
        if timer then
            timer:stop()
        end
        timer = hs.timer.doAfter(delay, function()
            func(table.unpack(args))
        end)
    end
end

function M.filterHiddenFiles(files)
    local filteredFiles = {}
    for _, file in ipairs(files) do
        local fileName = file:match("([^/]+)$")
        if fileName and not fileName:match("^%.") then
            table.insert(filteredFiles, file)
        end
    end
    return filteredFiles
end

return M
```

```lua
local utils = require("utils")

local M = {}

local debounceTimer = nil
local watcher = nil

function M.runRclone()
    local localPath = "/Users/XXX/Library/Mobile\\ Documents/iCloud~md~obsidian/Documents/Afanty"
    local remotePath = "webdav:/Afanty"
    
    -- 从本地同步到远程，包括删除操作
    local syncToRemoteCommand = string.format("rclone sync %s %s --delete-during", localPath, remotePath)
    
    -- 从远程同步到本地，包括删除操作
    local syncToLocalCommand = string.format("rclone sync %s %s --delete-during", remotePath, localPath)
    
    -- 执行从本地到远程的同步
    hs.task.new("/bin/bash", function(exitCode, stdOut, stdErr)
        if exitCode == 0 then
            print("本地到远程同步成功完成")
            
            -- 执行从远程到本地的同步
            hs.task.new("/bin/bash", function(exitCode2, stdOut2, stdErr2)
                if exitCode2 == 0 then
                    print("远程到本地同步成功完成")
                    print("双向同步全部完成")
                else
                    print("远程到本地同步失败")
                    print("错误:", stdErr2)
                end
            end, {"-c", syncToLocalCommand}):start()
        else
            print("本地到远程同步失败")
            print("错误:", stdErr)
        end
    end, {"-c", syncToRemoteCommand}):start()
end

local function debouncedRunRclone()
    utils.debounce(function()
        print("执行rclone同步")
        M.runRclone()
    end, 5)
end

function M.watchFolder()
    local folderPath = "/Users/XXX/Library/Mobile Documents/iCloud~md~obsidian/Documents/Afanty"
    
    if watcher then
        watcher:stop()
    end
    
    watcher = hs.pathwatcher.new(folderPath, function(files)
        local changedFiles = utils.filterHiddenFiles(files)
        
        if #changedFiles > 0 then
            print("检测到文件变化")
            for _, file in ipairs(changedFiles) do
                print("变化的文件:", file)
            end
            debouncedRunRclone()
        end
    end)
    
    watcher:start()
    print("开始监控文件夹:", folderPath)
end

return M
```

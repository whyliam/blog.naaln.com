# Errors

## [ERR-20260611-001] ps-process-inspection

**Logged**: 2026-06-11T21:24:00+08:00
**Priority**: low
**Status**: pending
**Area**: infra

### Summary
The sandbox denied `ps` while inspecting the process listening on a local port.

### Error
```text
zsh:1: operation not permitted: ps
```

### Context
- Command: `ps -p 88792 -o pid=,ppid=,etime=,command=`
- Environment: managed macOS workspace sandbox

### Suggested Fix
Use `lsof -a -p <pid> -d cwd -Fn` and query the local HTTP endpoint when only the process working directory and server identity are needed.

### Metadata
- Reproducible: unknown
- Related Files: none

---

## [ERR-20260611-004] generated-link-check-script

**Logged**: 2026-06-11T21:34:00+08:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary
The first inline Node link-check script used invalid `for` syntax.

### Error
```text
SyntaxError: Unexpected token ')'
```

### Context
- The recursive walker was incorrectly declared inside `for (...)`.
- The blog build and generated files were unaffected.

### Suggested Fix
Declare the recursive `walk` function normally, call it, then iterate over the collected files.

### Metadata
- Reproducible: yes
- Related Files: none

---

## [ERR-20260611-003] aether-theme-lint

**Logged**: 2026-06-11T21:31:00+08:00
**Priority**: medium
**Status**: pending
**Area**: tests

### Summary
Aether theme unit tests pass, but the repository ESLint and Stylus lint scripts fail.

### Error
```text
ESLint: 43 errors in source/js/aether-cmdk.js and source/js/aether.js
Stylelint: 316 errors across inherited and Aether Stylus files
```

### Context
- `npm test`: 132 passing
- `npm run eslint`: exit 1
- `npm run stylint`: exit 2
- Theme repository: `/Users/xingquan/Code/hexo-theme-aether`

### Suggested Fix
Fix the JavaScript lint findings and align Stylelint configuration with the repository's Stylus conventions before enforcing it in CI.

### Metadata
- Reproducible: yes
- Related Files: `/Users/xingquan/Code/hexo-theme-aether/source/js/aether-cmdk.js`, `/Users/xingquan/Code/hexo-theme-aether/source/js/aether.js`

---

## [ERR-20260611-002] od-command-shadowed

**Logged**: 2026-06-11T21:29:00+08:00
**Priority**: low
**Status**: pending
**Area**: infra

### Summary
The `od` command resolved to the Open Design application wrapper instead of the system byte-dump utility.

### Error
```text
Error: OD_DATA_DIR ".../Open Design/.../data" is not writable: EPERM
```

### Context
- Command: `git show HEAD:themes/aether | od -An -c`
- Environment: managed macOS workspace with an `od` command name collision.

### Suggested Fix
Use `/usr/bin/od` explicitly, or avoid the byte dump when plain `git show` is sufficient.

### Metadata
- Reproducible: yes
- Related Files: none

---

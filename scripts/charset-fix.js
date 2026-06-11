'use strict';

// Fix missing charset=utf-8 in Content-Type for XML feeds.
// hexo-server sets 'application/atom+xml' without charset, causing CJK garbled text.
// Priority 1 ensures this runs before hexo-server's route middleware (priority 10).
hexo.extend.filter.register('server_middleware', function(app) {
  app.use(function(req, res, next) {
    const origSetHeader = res.setHeader.bind(res);
    res.setHeader = function(name, value) {
      if (name.toLowerCase() === 'content-type' && typeof value === 'string'
          && !value.includes('charset')
          && (value.includes('xml') || value === 'text/html' || value.includes('json'))) {
        value += '; charset=utf-8';
      }
      return origSetHeader(name, value);
    };
    next();
  });
}, 1);

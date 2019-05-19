const Koa = require('koa');

const serve = require('koa-static');
const mount = require('koa-mount');
const proxyPass = require('@junyiz/koa-proxy-pass');

const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const apiHost = process.env.API_HOST || 'localhost';

const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log((`${ctx.method} ${ctx.url} - ${ms}`));
});

app.on('error', (err) => {
  console.error('Server Error', err);
});

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  return next();
});

app.use(proxyPass({
  host: `http://${apiHost}:3000`,
  map: p => p.replace('/api', ''),
  match: /^\/api\//,
}));

app.use(mount('/', serve(path.join(__dirname, '../dist'))));

app.use(async (ctx) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = await readFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || 8081;

app
  .listen(port, (err) => {
    if (err) throw err;
    console.log(`App Listening on Port ${port}`);
  });

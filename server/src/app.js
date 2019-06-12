const Koa = require('koa');
const Router = require('koa-router');
const joi = require('@hapi/joi');
const validate = require('koa-joi-validate');
const search = require('./search');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log((`${ctx.method} ${ctx.url} - ${ms}`));
})

app.on('error', err => {
    console.error('Server Error', err);
});

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    return next();
});

/**
 * GET /search
 * Search for a term in the description
 * Query Params -
 * term: string under 60 characters
 * offset: positive integer
 */
router.get('/search',
    validate({
        query: {
            term: joi.string().max(60).required(),
            offset: joi.number().integer().min(0).default(0)
        }
    }),
    async ctx => {
        const { term, offset } = ctx.request.query;
        ctx.body = await search.queryTerm(term, offset);
    }
);

router.get('/all',
    validate({
        query: {
            offset: joi.number().integer().min(0).default(0)
        },
    }),
    async ctx => {
        const { offset } = ctx.request.query;
        ctx.body = await search.all(offset);
    }
);

const port = process.env.PORT || 3000

module.exports = app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port, err => {
        if (err) throw err;
        console.log(`App Listening on Port ${port}`);
    });


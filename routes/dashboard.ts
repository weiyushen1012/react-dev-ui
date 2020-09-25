import * as Router from 'koa-router';
import { Context } from 'koa';
import { RouteType, TemplateData } from './types';

const router = new Router();

router.get('/dashboard', async (ctx: Context) => {
  const data: TemplateData = {
    route: RouteType.Dashboard,
  };
  await ctx.render('dashboard/index', data);
});

router.get('/', (ctx: Context) => {
  ctx.redirect('/dashboard');
});

export default router;

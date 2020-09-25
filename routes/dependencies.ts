import * as Router from 'koa-router';
import { Context } from 'koa';
import { RouteType, TemplateData } from './types';

const router = new Router();

router.get('/dependencies', async (ctx: Context) => {
  const data: TemplateData = {
    route: RouteType.Dependencies,
  };
  await ctx.render('dependencies/index', data);
});

export default router;

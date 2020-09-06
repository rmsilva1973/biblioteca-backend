import { Router } from 'express';
const routes = Router();

import obrasRouter from './obras.routes';

routes.use('/obras', obrasRouter);

export default routes;

import { Router } from 'express';
import webScraping from './webScraping.routes';

const routes = Router();

routes.use('/webScraping', webScraping);

export default routes;

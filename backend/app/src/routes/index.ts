import { Router } from 'express';
import instagramScraping from './instagram_scraping.routes';

const routes = Router();

routes.use('/instagram_scraping', instagramScraping);

export default routes;

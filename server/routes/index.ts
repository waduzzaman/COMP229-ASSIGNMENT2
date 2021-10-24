import express from 'express';
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../controllers';
const router = express.Router();

/* GET home page. */
router.get('/', DisplayHomePage);

router.get('/about', DisplayAboutPage);

router.get('/projects', DisplayProjectsPage);

router.get('/services', DisplayServicesPage);

router.get('/contact', DisplayContactPage);

export default router;
import express from 'express';
import { DisplayListPage, DisplayAddPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../controllers/contact';

const router = express.Router();

/* GET /contact-list page. */
router.get('/list', DisplayListPage);

/* GET - display /contact-list/add page. */
router.get('/add', DisplayAddPage);

/* GET - display /contact-list/edit/:id page. */
router.get('/edit/:id', DisplayEditPage);

/* POST - process /contact-list/add page */
router.post('/add', ProcessAddPage);

/* POST - process /contact-list/edit/:id page */
router.post('/edit/:id', ProcessEditPage);

/* GET - process /contact-list/delete/:id */
router.get('/delete/:id', ProcessDeletePage);

export default router;


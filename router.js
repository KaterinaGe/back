import express from 'express'
import Create from "./Create.js";
import GetAll from './GetAll.js';
import Update from './Update.js';
import Delete from './Delete.js';

const router = express.Router()

router.post('/todo', Create)
router.get('/todos', GetAll)
router.put('/todo/:uuid', Update)
router.delete('/todo/:uuid', Delete)

export default router;

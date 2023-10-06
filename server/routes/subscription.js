import express from 'express';
import { subscriptionController,getAllSubController,deleteSubController } from '../controllers/subscribe.js';
import auth from '../middleware/auth.js'
import { accessController, deleteAccessController, getAllAccessController } from '../controllers/access.js';

const routes = express.Router();

routes.post('/subscribe',auth,subscriptionController)
routes.get('/getAllSub',getAllSubController)
routes.delete('/deleteSub/:channel/:subscriber',auth,deleteSubController)

routes.post('/access',auth,accessController)
routes.get('/getAllAccess',getAllAccessController)
routes.delete('/deleteAccess/:channel',auth,deleteAccessController)

export default routes;
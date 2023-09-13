import express from 'express';
import {uploadVideo,getAllvideos} from '../controllers/video.js'; //add function here then => video.js in controllers
import {likeController} from '../controllers/like.js';
import {viewController} from '../controllers/views.js';
import upload from '../Helpers/fileHelpers.js';
import { likeVideoController , getAlllikeVideoController,deleteLikeVideoController} from '../controllers/likeVideo.js';
import { watchLaterController , getAllwatchLaterController,deletewatchLaterController } from '../controllers/watchLater.js';
import { HistoryController , getAllHistoryController,deleteHistoryController } from '../controllers/History.js';
import auth from '../middleware/auth.js'

const routes = express.Router();
routes.post("/uploadVideo",auth,upload.single("file"),uploadVideo)
routes.get("/getvideos",getAllvideos) //add route and function here
routes.patch("/like/:id",auth,likeController)// create likeController () in controller
routes.patch("/view/:id",viewController)

routes.post('/likeVideo',auth,likeVideoController)
routes.get('/getAlllikeVideo',getAlllikeVideoController)
routes.delete('/deleteLikedVideo/:videoId/:Viewer',auth,deleteLikeVideoController)

routes.post('/watchLater',auth,watchLaterController)
routes.get('/getAllwatchLater',getAllwatchLaterController)
routes.delete('/deleteWatchLater/:videoId/:Viewer',auth,deletewatchLaterController)

routes.post('/History',auth,HistoryController)
routes.get('/getAllHistory',getAllHistoryController)
routes.delete('/clearHistory/:userId',auth,deleteHistoryController)
export default routes;
import axios from "axios";

const API = axios.create({baseURL : `http://localhost:5500/`});
// const API = axios.create({baseURL : `https://youtubeclone-yak1.onrender.com/`});

API.interceptors.request.use((req) => {
    if(localStorage.getItem("Profile")){
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem("Profile")).token
        }`;
    }
    return req;
});

export const login=(authData) => API.post('/user/login',authData);
export const updateChannelData = (id,updateData) => API.patch(`/user/update/${id}`,updateData);
export const fetchAllChannel = () => API.get('/user/getAllChannels');

export const uploadVideo = (fileData , fileOptions) => API.post('/video/uploadVideo',fileData , fileOptions);
export const getVideos = () => API.get('/video/getvideos'); // to video.js from actions
export const likeVideo = (id,Like) => API.patch(`/video/like/${id}`,{Like}); //add it in server / routes
export const viewsVideo = (id) => API.patch(`/video/view/${id}`);

export const addToLikedVideo = (likedVideoData) => API.post('/video/likeVideo',likedVideoData);
export const getAlllikedVideo = () => API.get('/video/getAlllikeVideo');
export const deleteLikedVideo = (videoId,Viewer) => API.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`)

export const addTowatchLater = (watchLaterData) => API.post('/video/watchLater',watchLaterData);
export const getAllwatchLater = () => API.get('/video/getAllwatchLater');
export const deleteWatchLater = (videoId,Viewer) => API.delete(`/video/deleteWatchLater/${videoId}/${Viewer}`);

export const addToHistory = (HistoryData) => API.post('/video/History',HistoryData);
export const getAllHistory = () => API.get('/video/getAllHistory');
export const clearHistory = (userId) => API.delete(`/video/clearHistory/${userId}`);

export const postComment = (CommentData) => API.post('/comment/post',CommentData);
export const deleteComment = (id) => API.delete(`/comment/delete/${id}`);
export const editComment = (id,commentBody) => API.patch(`/comment/edit/${id}`,{commentBody});
export const getAllComment = (CommentData) => API.get('/comment/get');

export const addToSub = (SubData) => API.post('/subscription/subscribe',SubData);
export const getAllSub = () => API.get('/subscription/getAllSub');
export const deleteSub = (channel,subscriber) => API.delete(`/subscription/deleteSub/${channel}/${subscriber}`);

export const addToAccess = (AccessData) => API.post('/subscription/access',AccessData);
export const getAllAccess = () => API.get('/subscription/getAllAccess');
export const deleteAccess = (channel) => API.delete(`/subscription/deleteAccess/${channel}`);
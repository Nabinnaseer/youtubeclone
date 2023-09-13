const videoReducer = (state = {data:null},action) => {
    switch(action.type){
        case 'POST_VIDEO':
            return {...state};
        case 'POST_VIEWS':
            return {...state};
        case 'FETCH_All_VIDEOS':
            return {...state,data:action.payload}; //add case here then => routes/video.js
        default:
            return state;
    }
}

export default videoReducer
const subReducer = (state = {data:null},action) => {
    switch (action.type) {
        case "POST_SUB":
            return {...state, data:action.data};
        case 'FETCH_ALL_SUB':
            return {...state,data:action.payload};
        default:
            return state;
    }
}

export default subReducer;
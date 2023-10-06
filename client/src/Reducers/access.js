const accessReducer = (state = {data:null},action) => {
    switch (action.type) {
        case "POST_ACCESS":
            return {...state, data:action.data};
        case 'FETCH_ALL_ACCESS':
            return {...state,data:action.payload};
        default:
            return state;
    }
}

export default accessReducer;
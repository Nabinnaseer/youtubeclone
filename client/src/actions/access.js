import * as api from '../api';

export const addToAccess = (AccessData) => async(dispatch) => {
    try {
        const { data } = await api.addToAccess(AccessData);
        dispatch({type:"POST_ACCESS",data});
        dispatch(getAllAccess());
    } catch (error) {
        console.log(error);
    }
}

export const getAllAccess = () => async(dispatch) =>  {
    try {
        const {data} = await api.getAllAccess();
        dispatch({type:'FETCH_ALL_ACCESS',payload:data})
    } catch (error) {
        console.log(error)
    }
} 

export const deleteAccess = (AccessData) => async(dispatch) => {
    try {
        const {channel} = AccessData;
        await api.deleteAccess(channel);
        dispatch(getAllAccess());
    } catch (error) {
        console.log(error)
    }
}
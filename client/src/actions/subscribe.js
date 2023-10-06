import * as api from '../api';

export const addToSub = (SubData) => async(dispatch) => {
    try {
        const { data } = await api.addToSub(SubData);
        dispatch({type:"POST_SUB",data});
        dispatch(getAllSub());
    } catch (error) {
        console.log(error);
    }
}

export const getAllSub = () => async(dispatch) =>  {
    try {
        const {data} = await api.getAllSub();
        dispatch({type:'FETCH_ALL_SUB',payload:data})
    } catch (error) {
        console.log(error)
    }
} 

export const deleteSub = (SubData) => async(dispatch) => {
    try {
        const {channel,subscriber} = SubData;
        await api.deleteSub(channel,subscriber);
        dispatch(getAllSub());
    } catch (error) {
        console.log(error)
    }
}
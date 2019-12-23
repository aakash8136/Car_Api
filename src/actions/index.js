import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';


export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPost()); 
    // console.log(    _.uniq(_.map(getState().posts,'userId')))
    // const userIds =  _.uniq(_.map(getState().posts,'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));
    _.chain(getState().posts)
        .map('userId')
         .uniq()
          .forEach(id => dispatch (fetchUser(id)))
           .value()
}

export const fetchPost =  () => {

    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({
            type: 'FETCH_POST',
            payLoad: response.data
        })
    }
}

export const fetchUser = id => async dispatch =>{
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({
            type:'FETCH_USER',
            payLoad: response.data
        })
    }

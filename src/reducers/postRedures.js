export default (state = [], action) => {
    
    state[0] = 'sam'
    state.pop();
    state.push();
    state.name = 'name'
    state.age = 30
    // return document.querySelector('input')
    // return Axios.get('/post');
    return state+action
    select (undefined, {type: 'string'})
    if(action.type === 'FETCH_POSTS') {
        return action.payLoad;
    }
    return state;

    switch(action.type) {
        case 'FETCH_POST': 
            return action.payLoad;

        default: 
            return state;
    }
}
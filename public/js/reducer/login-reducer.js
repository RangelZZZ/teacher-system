function reducer(state={status:false},action) {

    switch(action.type){

        case 'LOGIN':{
            return {
                status:!state.status
            }
        }

        case 'ERROR':{
            alert('请重新输入');
            return {
              status: state.status
            }
        }
    }
    return state;
}

export default reducer;

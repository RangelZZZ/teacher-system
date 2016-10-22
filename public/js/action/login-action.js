'use strict';

export const isCorrect = (mobilePhone,password, capture) =>{

    return (dispatch) => {

        dispatch(checkInfor(mobilePhone,password, capture));

    }
};

export const checkInfor = (mobilePhone,password, capture) => {

    if(mobilePhone === 'admin@admin.com' && password === '12345678' && capture === '1234'){
         return {
            type:'LOGIN',
        }
    }

    else{
        return {
            type:'ERROR',
        }
    }
};

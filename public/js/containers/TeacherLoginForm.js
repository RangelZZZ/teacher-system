"use strict";

import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import TeacherLoginForm from '../component/TeacherLoginForm';
import {connect} from 'react-redux';
import {isCorrect} from '../action/login-action';

TeacherLoginForm.PropTypes = {

    onCheckLogin: PropTypes.func.isRequired
};

const mapStateToProps = (state)=>{

    return {
        status: state.status
    }
};

const mapDispatchToProps = (dispatch)=> {

    return {

        onCheckLogin: (mobilePhone,password, capture)=> {
            dispatch(isCorrect(mobilePhone,password, capture));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherLoginForm);





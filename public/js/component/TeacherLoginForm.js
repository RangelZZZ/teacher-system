'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

class TeacherLoginForm extends React.Component {

    checkLogin() {
        const mobilePhone = this.refs.mobilePhone.value;
        const password = this.refs.password.value;
        const capture = this.refs.capture.value;
        this.props.onCheckLogin(mobilePhone,password, capture);
    }

    render() {
        return (<div>
                <div>
                    <h1 className="text-center">思沃特训营</h1>
                </div>
                <h2 className="text-center">欢迎登录思沃学院</h2>
                <div>
                    <div className="form-group row">
                        <div className="col-md-4 col-md-offset-4">

                            <input ref="mobilePhone" className="form-control" type="text" placeholder="邮箱/手机号"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4 col-md-offset-4">
                            <input ref="password" className="form-control" type="password" placeholder="密码"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className=" col-md-4 col-md-offset-4">
                            <div className="row">
                                <div className="col-md-7">
                                    <input ref="capture" type="text" className=" form-control" placeholder="请输入验证码"/>
                                </div>
                                <div className="col-md-5">
                                    <img alt="验证码" className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4 col-md-offset-4">
                            <Link to = {this.props.status ? '/loginSuccess' : '/'}>
                            <input type="text" className=" form-control btn btn-lg btn-primary" placeholder="登录"
                                   onClick={this.checkLogin.bind(this)}/>
                            </Link>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4 col-md-offset-7">
                            <Link to="/page1">忘记密码</Link>
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}

export default TeacherLoginForm;
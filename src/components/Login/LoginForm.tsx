import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/Textarea";
import {required} from "../../utils/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {NavLink} from "react-router-dom";
import s from './LoginForm.module.css'

type FormDataType= {
    email:string
    login: string
    password: string
    rememberMe: boolean
}

let LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    console.log('Login')

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}  validate={[required]}
                       component={Input} name={'email'}/>
            </div>
            <div>
                <Field  placeholder={'Password'} validate={[required]} type={'password'}
                        component={Input}
                        name={'password'}/>
            </div>
                {
                    props.error&& <div className={s.formSummaryError}> {props.error} </div>
                }
            <div>
                <Field type="checkbox" component={Input} name={'rememberMe'}/> remember me
            </div>
            <div>
                <button >Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType> ({form: 'login'})(LoginForm)


type LoginType = {
    isAuth: boolean
}

const Login = (props: any) => {
    const onSubmit= (formData:FormDataType)=> {
        props.login(formData.email,formData.password,formData.rememberMe,)
    }
    if(props.isAuth) {
        return <NavLink to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state:AppRootStateType) :LoginType => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps,{login}) (Login);
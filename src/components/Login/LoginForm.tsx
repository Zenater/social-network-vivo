import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../../common/FormsControl/Textarea";
import {required} from "../../utils/validators";
import {login} from "../../redux/authReducer";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {NavLink} from "react-router-dom";
import s from './LoginForm.module.css'
type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'}  validate={[required]}
                       component={Input} name={'email'}/>
            </div>
            <div>
                <Field  placeholder={'Password'} validate={[required]} type={'password'}
                        component={Input} name={'password'}/>
                <Field type="checkbox" component={Input} name={'rememberMe'}/> remember me
                { captchaUrl && <img src={captchaUrl} />}
                { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {}) }
                {error && <div className={s.formSummaryError}> {error} </div>}
            </div>
            <div>
                <button >Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
// type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>


export const Login:React.FC  = () => {
    const captchaUrl = useSelector((state: AppRootStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppRootStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if(isAuth) {
        return <NavLink to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
};

// const mapStateToProps = (state:AppRootStateType) => ({
//     captchaUrl: state.auth.captchaUrl,
//     isAuth: state.auth.isAuth})
//
// export default connect(mapStateToProps,{login}) (Login);
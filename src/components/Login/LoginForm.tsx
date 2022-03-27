import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/Textarea";
import {required} from "../../utils/validators";

type FormDataType= {
    login: string
    password: string
    rememberMe: boolean
}
let LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}  validate={[required]}
                       component={Input} name={'login'}/>
            </div>
            <div>
                <Field  placeholder={'Password'} validate={[required]}
                        component={Input}
                        name={'password'}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={'rememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType> ({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit= (formData:FormDataType)=> {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGiN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
// let LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {

export default Login;
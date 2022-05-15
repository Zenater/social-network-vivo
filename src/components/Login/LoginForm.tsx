import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControl/Textarea";
import {required} from "../../utils/validators";
import {login} from "../../redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Navigate, NavLink} from "react-router-dom";
import s from './LoginForm.module.css'
import {useFormik} from "formik";
import Button from '@material-ui/core/Button/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} validate={[required]}
                       component={Input} name={'email'}/>
            </div>
            <div>
                <Field placeholder={'Password'} validate={[required]} type={'password'}
                       component={Input} name={'password'}/>
                <Field type="checkbox" component={Input} name={'rememberMe'}/> remember me
                {captchaUrl && <img alt={'captcha'} src={captchaUrl}/>}
                {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
                {error && <div className={s.formSummaryError}> {error} </div>}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
// type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>
export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppRootStateType) => state.auth.isAuth)
    const captchaUrl = useSelector<AppRootStateType, string| null>((state: AppRootStateType) => state.auth.captchaUrl)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required field';
            } else if (values.password.length < 3) {
                errors.password = 'Invalid password address';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(login(values))
            // alert(JSON.stringify(values));
            formik.resetForm()
        },
    })
    if (isAuth) {
        return <Navigate to={'/'}/>
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>

            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.password && formik.errors.email &&
                        <div style={{color: 'red'}}>{formik.errors.email}</div>}
                        <TextField type="password"
                                   label="Password"
                                   margin="normal"
                                   {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password &&
                        <div style={{color: 'red'}}>{formik.errors.password}</div>}
                        <FormControlLabel label={'Remember me'}
                                          control={<Checkbox {...formik.getFieldProps('rememberMe')}
                                          />}/>
                        {captchaUrl && <img alt={'captcha'} src={captchaUrl}/>}
                        {captchaUrl && <TextField label="captcha" margin="normal"
                            {...formik.getFieldProps('captcha')}/>}

                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

// export const Login:React.FC  = () => {
//     const captchaUrl = useSelector((state: AppRootStateType) => state.auth.captchaUrl)
//     const isAuth = useSelector((state: AppRootStateType) => state.auth.isAuth)
//     const dispatch = useDispatch()
//
//     const onSubmit = (formData: LoginFormValuesType) => {
//         dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
//     }
//     if(isAuth) {
//         return <NavLink to={'/profile'}/>
//     }
//     return (
//         <div>
//             <h1>LOGIN</h1>
//             <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
//         </div>
//     );
// };
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)


// const mapStateToProps = (state:AppRootStateType) => ({
//     captchaUrl: state.auth.captchaUrl,
//     isAuth: state.auth.isAuth})
//
// export default connect(mapStateToProps,{login}) (Login);
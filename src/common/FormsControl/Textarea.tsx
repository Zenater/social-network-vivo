import React from 'react';
import s from './Textarea.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps} className={s.textarea}/>
    </FormControl>

};

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} className={s.input}/></FormControl>
};

export const createField=(placeholder: string | undefined, name: any, validators: any, component: any, props = {}, text = "")=> {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}
// export type GetStringKeys<T> = Extract<keyof T, string>
import React from 'react';
import s from './My posts.module.css';
import {Post, PostType} from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../../common/FormsControl/Textarea";

type MyPostsPropsType = {
    post: Array<PostType>
    addPost: (newPostText:string) =>void
}

const maxLenght10 = maxLengthCreator(10);

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'}
                   validate={[required,maxLenght10]}/>
            <div>
                <button >addPost</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export const MyPosts = React.memo((props: MyPostsPropsType) => {

    let postsElement = props.post.map(p => <Post message={p.message} likes={p.likes}/>)

    const addNewPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyPostsFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
});


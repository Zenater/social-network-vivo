import React from 'react';
import s from './My posts.module.css';
import {Post, PostType} from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../../common/FormsControl/Textarea";

type MyPostsPropsType = {
    post: Array<PostType>
    addPost: (newPostText: string) => void
    id?: number
}

const maxLength10 = maxLengthCreator(10);


export const MyPosts = React.memo((props: MyPostsPropsType) => {

    let postsElement = [...props.post].reverse().map(p => <Post key={p.id} message={p.message} likes={p.likes}
                                                                image={p.image}/>)

    const addNewPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <div className={s.post}>
                <p className={s.title}>Create Post</p>
                <MyPostsFormRedux onSubmit={addNewPost}/>
                {postsElement}
            </div>
        </div>
    )
});
const AddNewPostForm = (props: any) => {
    return (
        <form className={s.wrap} onSubmit={props.handleSubmit}>
            <img className={s.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg'/>
            {/*<div className={s.textarea1}>*/}
                <Field  component={Textarea} name='newPostContent' placeholder="Write something here..."
                       validate={[required, maxLength10]}
                />
                <button className={s.add__btn}>Add post</button>
            {/*</div>*/}

        </form>
    )
}
const MyPostsFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)



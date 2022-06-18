import {addPostAC, deletePostAC, Post, profileReducer} from "../profileReducer";

/*export type StateProfileType = {
    post: Post[],
}*/

let state = {
    post: [
        {id: 1, message: "hi, how are you?", likes: 12},
        {id: 2, message: "It my fist posts", likes: 11},
        {id: 3, message: "It my dog", likes: 5},
        {id: 4, message: "Hello everyone", likes: 4}
    ],
}
test('length of posts should be incremented', ()=> {
    let action=addPostAC('it=ksmasutra.com')

    //2 Action
    let newState=profileReducer(state , action)

    //3 expect
    expect(newState.post.length).toBe(5);
})
test('message  of new posts should be corrected',()=> {
    let action=addPostAC('it-kamasutra.com')

    //2 Action
    let newState=profileReducer(state , action)

    //3 rxpect
    expect(newState.post[4].message).toBe('it-kamasutra.com');
})

test('after deleting  length should be decrement',()=> {
    let action=deletePostAC (1)
    //2 Action
    let newState=profileReducer(state , action)
    //3 rxpect
    expect(newState.post.length).toBe(3);
})

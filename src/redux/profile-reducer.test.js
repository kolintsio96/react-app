import React from "react";
import postsAvatar from "../img/post--avatar.png";
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {
            id: 1,
            message: 'Post 1',
            likes: 1,
            photo: postsAvatar
        },
        {
            id: 2,
            message: 'Post 2',
            likes: 32,
            photo: postsAvatar
        },
        {
            id: 3,
            message: 'Post 3',
            likes: 10,
            photo: postsAvatar
        }
    ],
};

test('posts length should be incremented', () => {
    // 1. test data
    let action = addPost({newPostText: "newText"});

    // 2. action
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

test('post message should be "newText"', () => {
    // 1. test data
    let action = addPost({newPostText: "newText"});

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[3].message).toBe("newText");
});

test('posts length should be 3 if postId is incorrect', () => {
    // 1. test data
    let action = deletePost(4);

    // 2. action
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('posts length should be decremented', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});
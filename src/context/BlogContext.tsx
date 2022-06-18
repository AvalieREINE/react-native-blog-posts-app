import React, {useState, useReducer, Dispatch} from "react";
import createDataContext from './createDataContext';
import {State, Post, Action, AddPost, DeletePost, ActionKind, InitialState} from '../types/index';
import jsonServer from "../api/jsonServer";


const blogReducer = (state:State , action: Action)  => {
  switch (action.type) {
    case ActionKind.getPosts: 
      return action.payload;
    // case ActionKind.addPost:
    //   return [...state,
    //      {
    //       id: Math.floor(Math.random() *9999999999), 
    //       title:action.payload.title,
    //        content:action.payload.content
    //       }]
    case ActionKind.deletePost:
      return state.filter((post) => post.id !== action.payload);
    case ActionKind.editPost:
      return state.map((blog) => {
         return blog.id === action.payload.id ? action.payload : blog;
      })
    default:
      return state;
  }
}

const getBlogPosts = (dispatch: Dispatch<Action>) => {
  return async ()  => {
    const res = await jsonServer.get('/blogposts')
    dispatch({type: ActionKind.getPosts, payload:res.data})
  }
}

const addBlogPost = () => {
  return async (title: string, content: string) => {
  // dispatch({type: ActionKind.addPost, payload: {title, content}})
  await jsonServer.post('/blogposts', {title, content})
  }
}

const deleteBlogPost = (dispatch: Dispatch<Action>) => {
  return async (id: number) => {
     
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({type: ActionKind.deletePost, payload: id})
  }
}
 
const editBlogPost = (dispatch: Dispatch<Action>) => {
  return async ( title: string, content: string, id:number) => {
  // dispatch({type: ActionKind.editPost, payload: {id, title, content}})
  await jsonServer.put(`/blogposts/${id}`, {title, content}) 
  }
}

export const { Context, Provider} = createDataContext(blogReducer, {getBlogPosts,addBlogPost, deleteBlogPost, editBlogPost}, InitialState)

function callback() {
  throw new Error("Function not implemented.");
}

import React, {useState, useReducer, Dispatch} from "react";
import createDataContext from './createDataContext';
import {State, Post, Action, AddPost, DeletePost, ActionKind, InitialState} from '../constants/index';


const blogReducer = (state:State , action: Action)  => {
  switch (action.type) {
    case ActionKind.addPost:
      return [...state,
         {
          id: Math.floor(Math.random() *9999999999), 
          title:action.payload.title,
           content:action.payload.content
          }]
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

const addBlogPost = (dispatch: Dispatch<Action>) => {
  return (title: string, content: string) => {
  dispatch({type: ActionKind.addPost, payload: {title, content}})
  }
}

const deleteBlogPost = (dispatch: Dispatch<Action>) => {
  return (id: number) => {
    dispatch({type: ActionKind.deletePost, payload: id})
  }
}
 
const editBlogPost = (dispatch: Dispatch<Action>) => {
  return ( title: string, content: string, id:number) => {
  dispatch({type: ActionKind.editPost, payload: {id, title, content}})
  }
}

export const { Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, editBlogPost}, InitialState)

function callback() {
  throw new Error("Function not implemented.");
}

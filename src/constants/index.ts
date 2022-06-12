import React, {Dispatch} from "react"; 
export type State = Post[] | [];

export type Action = AddPost | DeletePost | EditPost;

export interface AddPost {
  type: ActionKind.addPost
  payload: Post
}

export interface DeletePost {
  type: ActionKind.deletePost
  payload: number
}

export interface EditPost {
  type: ActionKind.editPost
  payload: Post
}
export enum ActionKind {
   addPost = 'add_blogpost',
   deletePost = 'delete_blogpost',
   editPost = 'edit_blogpost'
}
export type Post = {
  id?: number
  title: string
  content: string
}
export type context = {
  state:Post[] | [];
  addBlogPost:   (title: string, content: string ) => void
  editBlogPost:   (title: string, content: string, id: number) => void
  deleteBlogPost: (id: number) => void
}
export type Actions = {
  addBlogPost: (dispatch: Dispatch<Action>) => (title: string, content: string ) => void
  editBlogPost: (dispatch: Dispatch<Action>) => (title: string, content: string, id: number) => void
  deleteBlogPost: (dispatch: Dispatch<Action>) => (id: number) => void
}

export const InitialState = [{title: 'Test Post', content: 'Test Content', id: 1}];

export type BoundActions = Actions | {};
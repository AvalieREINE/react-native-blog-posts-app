import React, {Dispatch} from "react"; 
export type State = Post[] | [];

export type Action = AddPost | DeletePost | EditPost | getPosts;

export interface AddPost {
  type: ActionKind.addPost
  payload: Post
}

export interface getPosts {
  type: ActionKind.getPosts
  payload: Post[]
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
   editPost = 'edit_blogpost',
   getPosts = 'get_blogposts'
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
  getBlogPosts: () => void
}
export type Actions = {
  addBlogPost: (dispatch: Dispatch<Action>) => (title: string, content: string ) => void
  editBlogPost: (dispatch: Dispatch<Action>) => (title: string, content: string, id: number) => void
  deleteBlogPost: (dispatch: Dispatch<Action>) => (id: number) => void
  getBlogPosts: (dispatch: Dispatch<Action>) => () => void
}

export const InitialState = [];

export type BoundActions = Actions | {};
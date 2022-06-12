import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useContext, useState} from 'react'
import {Context} from '../context/BlogContext'
import {context} from '../constants/index';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({route, navigation}) => {
  const id = route.params.id.id;
  const {state, editBlogPost} = useContext(Context) as context;

  const blogPost = state.find((blog) => blog.id === id);

 
  return (
    <BlogPostForm initialValue={{title:blogPost?.title, content:blogPost?.content}}
     onSubmit={
      (title: string, content: string) => {
        editBlogPost(title,content,id)
        navigation.pop();
      } } />
  )
}

export default EditScreen

const styles = StyleSheet.create({})



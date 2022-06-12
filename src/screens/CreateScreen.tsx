import { StyleSheet  } from 'react-native'
import React, { useContext} from 'react'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const CreateScreen = ({navigation}) => {

  const {addBlogPost} = useContext(Context);
  
 return <BlogPostForm onSubmit={(title:string, content: string) =>{
  addBlogPost(title, content)
  navigation.navigate('Blogs')
 }} />
}

export default CreateScreen

const styles = StyleSheet.create({

})
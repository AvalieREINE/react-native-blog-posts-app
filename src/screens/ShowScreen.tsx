import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { Context } from '../context/BlogContext';
import {context, Post} from '../constants/index';

const ShowScreen = ({route}) => {
  const {id} = route.params;
  const {state} = useContext(Context) as context;
  const blogPost  = state.find((post) => post.id === id);
  return (
    <View style={styles.row}>
     { blogPost && 
     <>
     <Text style={styles.title}>{blogPost.title}</Text>
     <Text style={styles.content}>{blogPost.content}</Text>
     </>}
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal:10,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor: 'gray',
  },
  title: {
    fontSize:24,
    fontWeight: 'bold',
    marginBottom: 25
  },
  content: {
    fontSize:18
  }
})
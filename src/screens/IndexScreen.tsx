import React, {useContext, useEffect, FC} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons';
import {context} from '../types/index';



const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPosts}  = useContext(Context) as context;

  useEffect(() => {
    getBlogPosts()

   const unsubscribe =  navigation.addListener('focus', () => {
      getBlogPosts()
    })
    return unsubscribe 
    
  },[])
  return (
    <View>
      <FlatList 
       data={state}
       keyExtractor={(blogPosts) => blogPosts.id}
       renderItem={({item}) => {   
        return (  
          <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
        <View style={styles.row}>
        <Text style={styles.title}>{item.id} - {item.title}</Text>
        <TouchableOpacity onPress={() => deleteBlogPost(item.id!)}>
        <Feather style={styles.icon} name='trash'/>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>)
       }}
      />
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal:10,
    borderBottomWidth:1,
    borderColor: 'gray',
  },
  title: {
    fontSize:18
  },
  icon: {
    fontSize:24
  }
})
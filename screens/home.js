import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Fight Club', rating: 5, body: 'lore ipsum', key: 1 },
    { title: 'Silence of the lamps', rating: 5, body: 'lore ipsum', key: 2 },
    { title: 'American Beauty', rating: 5, body: 'lore ipsum', key: 3 },
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => navigation.navigate('Details', item)} >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>

        )}
      />
    </View>
  )
}

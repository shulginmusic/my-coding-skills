import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import { v1 as uuidv1 } from 'uuid'

import Header from "./components/Header";
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
  const [items, setItems] = useState([
    {id: uuidv1(), text: 'Java'},
    {id: uuidv1(), text: 'Spring Boot'},
    {id: uuidv1(), text: 'React'},
    {id: uuidv1(), text: 'Git / Maven'},
    {id: uuidv1(), text: 'MySQL'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'OK'});
    } else {
      setItems(prevItems => {
        return [{id: uuidv1(), text}, ...prevItems];
      });
    }
    
  }

  return(
    <View style={styles.container}>
      <Header />
      <AddItem addItem = {addItem}></AddItem>
      <FlatList
      data={items}
      renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem}></ListItem>
      )}
      >

      </FlatList>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#EFEFEF",
  },
});

export default App;
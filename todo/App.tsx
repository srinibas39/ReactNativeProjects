/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { TodoItem } from './components/TodoItem';
import { TodoInput } from './components/TodoInput';


interface MyObj {
  text: string,
  id: string
}


function App(): JSX.Element {


  const [todos, setTodos] = useState<MyObj[]>([])
  const [openModal, setOpenModal] = useState(false);


  const handleAdd = (text: string) => {
    setTodos((p) => [...p, { text: text, id: Math.random().toString() }])
    // setText("")
  }

  const handleDelete = (id: string) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )

  }

  const handleModal = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.app}>
        <View style={styles.buttonStyle} >
          <Button onPress={() => handleModal()} title='OPEN TODO' />
        </View>
        {
          openModal && <TodoInput openModal={openModal} handleAdd={handleAdd} closeModal={closeModal} />
        }


        <View style={styles.todoBottomContainer}>
          <FlatList data={todos} renderItem={(itemObj) => {
            return <TodoItem text={itemObj.item.text} handleDelete={handleDelete} id={itemObj.item.id} />
          }}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}

          />
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({

  app: {
    padding: 16,
    flex: 1,
    backgroundColor: "black"
  },

  todoBottomContainer: {
    flex: 3
  },

  buttonStyle: {
    marginTop: 32
  }



});

export default App;

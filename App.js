import { useState } from 'react'
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import Task from './app/components/Task'


export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])


  const handleAddTask = () => {
    setTaskItems([ ...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1) // remove the item from the array
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/*Today's Tasks*/}
      <View style={styles.tasksWrapper} >
        <Text style={styles.sectionTitle} onPress={() => alert('App by Logan 😊 \n@ github.com/loganamollo')} >Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks go*/}
          {
            taskItems.map( (item, index) => {
              return(
                <TouchableOpacity key={index} onPress={ (index) => completeTask(index)} >
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Write a task*/}
      <KeyboardAvoidingView
        behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a Task"} value={task} onChangeText={ task => setTask(task) } />
        <TouchableOpacity onPress={handleAddTask} >
          <View style={styles.addWrapper} >
            <Text style={styles.addText} >+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  addText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ebeaed',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
    width: 250,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  items: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
//Components
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import LoadData from "./src/LoadData";


export default function App(props) {

    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([])

    const addTodo = title => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title,
            }
        ])
    }
    const removeTodo = id => {
        const todo = todos.find(t => t.id === id)
        Alert.alert(
            'Удаление элемента',
            `Вы уверены что хотите удалить "${todo.title}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'negative'
                },
                {
                    text: 'Удалить',
                    onPress: () => {
                        setTodoId(null)
                        setTodos(prev => prev.filter(todo => todo.id !== id))
                    },
                    style:'positive'
                }
            ]
        )
    }
    const updateTodo = (id, title) =>  {
        setTodos(prev => prev.map(todo => {
            if(todo.id === id){
                todo.title = title
            }
            return todo
        }))

    }

    let content = todoId
        ? <TodoScreen
            goBack={() => setTodoId(null)}
            todo={todos.find(todo => todo.id === todoId)}
            remove={removeTodo}
            onSave={updateTodo}
        />
        : <MainScreen
            todos={todos}
            addTodo={addTodo}
            openTodo={setTodoId}
            remove={removeTodo}
        />


    return(
      <View style={styles.container}>
        <Navbar title = 'Todo App'/>
          <View>
              {content}
              <LoadData />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({})

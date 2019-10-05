import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, FlatList, Text, View} from 'react-native';

const Item = ({title, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
    </TouchableWithoutFeedback> 
);

export default class Main extends Component {
  state = {
    tarefas: [
      { id:1, tarefa:'Tarefa 1', selecionado: false },
      { id:2, tarefa:'Tarefa 2', selecionado: false },
      { id:3, tarefa:'Tarefa 3', selecionado: false },
      { id:4, tarefa:'Tarefa 4', selecionado: false },
      { id:5, tarefa:'Tarefa 5', selecionado: false },
      { id:6, tarefa:'Tarefa 6', selecionado: false },
    ]
  };
  
  selecionar=(id)=>{
    alert(id);
    //let tarefas = this.state.tarefas;
    //tarefas.find(item)
  }

  render() {
    return (
      <View style={styles.container}> 
        <FlatList style={styles.list}
          data = {this.state.tarefas}
          keyExtractor = {item => item.id.toString()}
          renderItem={
            ({item}) => <Item title={item.tarefa} onPress={()=>this.selecionar(item.id)}/>
          }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:30,
     backgroundColor: '#FAFAFA',
   },
   list: {
     padding: 20,
   },
   itemContainer:{
    backgroundColor:'#FFF',
    borderWidth: 1,
    borderColor:'#DDD',
    borderRadius: 5,
    padding: 20
   },
   itemText:{
     fontSize:20,
     fontWeight:'bold',
     color:'#333'
   }
});
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

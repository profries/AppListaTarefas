import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';

const Item = ({title}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
);

export default class Main extends Component {
  tarefas = [
    { id:1, tarefa:'Tarefa 1' },
    { id:2, tarefa:'Tarefa 2' },
    { id:3, tarefa:'Tarefa 3' },
    { id:4, tarefa:'Tarefa 4' },
    { id:5, tarefa:'Tarefa 5' },
    { id:6, tarefa:'Tarefa 6' },
  ];
  

  render() {
    return (
      <View style={styles.container}> 
        <FlatList style={styles.list}
          data = {this.tarefas}
          keyExtractor = {item => item.id}
          renderItem={
            ({item}) => <Item title={item.tarefa} />
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

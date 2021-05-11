import React from 'react';
import { Text, View } from 'react-native';
import Counter from './components/Counter';
import MyButton from './components/MyButton';
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
      <MyButton title="Button" onPress={() => alert('props')} />
      <MyButton title="Button" onPress={() => alert('children')}>
        Children Props
      </MyButton>
      <MyButton onPress={() => alert('default')} />
      <Counter />
    </View>
  );
};
export default App;
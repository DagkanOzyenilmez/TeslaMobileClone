/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet,View} from 'react-native';

import Carlist from './components/CarsList';
import CarItem from './components/CarItem';

function App() {
  return (
    
    <View style={styles.container}>

      <Carlist/>

    </View>  

  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});





export default App;

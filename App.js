import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import Routes from "./src/router";

function App() {
	
  return (
  	<>
       <Routes/>
       <StatusBar style="light" backgroundColor="transparent"  translucent={true}/>
    </>
  )
};
 export default App;
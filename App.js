import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading  from 'expo-app-loading';
import { gStyle } from './Styles/style';
import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
  'mt-var': require('./assets/Fonts/Montserrat-VariableFont_wght.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);
  if(font) {
    return (
      <View style={gStyle.main}>
        <Text>sdf</Text>
      </View>
    );
  } else {
    return  (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} />
    );
  }
}

const styles = StyleSheet.create({

});

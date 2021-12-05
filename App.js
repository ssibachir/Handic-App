import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Parametre from './Components/Recherche';

import ServiceButton from './Components/Buttons/ServiceButton';


export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: null }}>
        {/* HEADER */}
        <Parametre/>

        <View style={{ flex: 1, backgroundColor:null, paddingHorizontal: 10 }}>
            <ServiceButton title="Dictaphone" bgColor="lightblue" textColor="white" onPressButton={() => console.log('dictaphone')} />
            <ServiceButton title="Seing AI" bgColor="green" textColor="white" onPressButton={() => console.log('Seing AI')} />
            <ServiceButton title="Partage ta localisation" bgColor="orange" textColor="white" onPressButton={() => console.log('partage ta loc')} />
            <ServiceButton title="SoundScape" bgColor="red" textColor="white" onPressButton={() => console.log('SoundScape')} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10, 

  },
  button: {
    alignItems: "center",
    padding: 40
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
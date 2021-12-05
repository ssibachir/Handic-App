import React from "react";
import creation from '../assets/Creation.png'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

const Creation = () =>{
    return (
        <View>
           <Button style = {styles.textinput} title='Création' onPress={() => {}}/>
           <Image source={creation} style={styles.image}/>
        </View>

    )
}
const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
      }
})

export default Creation
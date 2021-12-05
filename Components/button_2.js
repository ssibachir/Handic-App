import React from 'react'
import { StyleSheet,View, Button,  Alert , TouchableOpacity, TextInput, Text} from 'react-native'


export default function Boutton (props) {
    const title = props.title;
    const color = props.color === undefined ? 'black' : props.color;
    const bgColor = props.bgColor;

    const style = props.style;
      return (
          <View>
            <TouchableOpacity style={[{ backgroundColor: bgColor, }]}>
                {props.children}
            </TouchableOpacity>
          </View>      
      )
}

// lorsqu'on externalise un style on utilise l'API styleSheet qui va accelerer l'application

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10, 

  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff7f50",
    padding: 40
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

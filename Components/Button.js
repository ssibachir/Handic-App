// Components/Search.js

import React from 'react'
import { StyleSheet,View, Button,  Alert , TouchableOpacity, TextInput, Text} from 'react-native'


class Services extends React.Component {
  constructor(props) {
    super(props);
    this.text = 'Press here';
  }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
          style={styles.button} onPress={this.onPress}>
            <Text>{this.text}</Text>
          </TouchableOpacity>
        </View>         
      )
    }
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

export default Services
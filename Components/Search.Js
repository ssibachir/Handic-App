import React from 'react'
import { StyleSheet,View, TextInput, Button, FlatList } from 'react-native'

class Search extends React.Component {

    constructor(props) {
      super(props)
      this.searchedText = "" 
      // Initialisation de notre donnée searchedText dans le state
      this.state = {
          films : [],
        }
    }
    _searchTextInputChanged(text) {
        this.searchedText = text
    }
    _loadFilms() {
        if (this.searchedText.length > 0 ){
        // Seulement si le texte recherché n'est pas vide
        
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({ films : data.results})
            
            })
        }

    }
  
    render() {
      console.log("RENDER")
      return (
        <View style={styles.main_container}>
          <TextInput
           style={styles.textinput} 
           placeholder='Titre du film'
           onChangeText = {(text) => this._searchTextInputChanged(text)}
           />
          <Button title='Rechercher' onPress={() => this._loadFilms()}/>
          <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
          />
        </View>
      )
    }
}
// lorsqu'on externalise un style on utilise l'API styleSheet qui va accelerer l'application
const styles = StyleSheet.create({
    main_container : {
        marginTop:20,
    },
    textinput : {
        marginLeft: 5,
        marginRight: 5,
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    }

})
export default Search
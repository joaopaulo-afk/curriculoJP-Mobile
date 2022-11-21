import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, ScrollView  } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (

    <ScrollView>
    <View style={styles.container}>
      <Text style= {styles.title}>
        Curriculo João Paulo Gaspar
      </Text>

      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',}}
      style={styles.photo}/>
          
      <Text style= {styles.title}>
        FORMAÇÃO
      </Text>

      <Text style={styles.paragraph}>
        Gradução em Sistemas para internet (Universidade Católica de Pernambuco), Bacharelado em Geografia (Universidade Federal de Pernambuco), Tecnico em Comunicação visual (ETEPAM), Tecnico em Informatica, Photoshop e Gamer.
      </Text>

      <Text style= {styles.title}>
          ÁREA DE ATUAÇÃO
      </Text>

      <Text style={styles.paragraph}>
        A elaboração de websites pode tanto ser dedicada para desktop (notebooks, por exemplo) quanto para smartphones. Com certeza você já reparou que os sites executados no navegador do seu celular são diferentes da interface disponível em um computador de mesa, certo?
        As telas dos smartphones são menores e, portanto, não proporcionam o mesmo campo de visão que a tela de um laptop. 
      </Text>

      <Text style= {styles.title}>
        HOBBIES
      </Text>

      <Text style={styles.paragraph}>
       Programar - Estudar - Jogar Futebol - Desmontar e montar computadores - Ser Gamer - Pegar Ônibus
      </Text>


    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },

  paragraph: {
    margin: 35,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
  },

  title:{
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    fontFamily: 'timesnewroman',
    },

    photo:{
      width: 200, 
      height: 200,
    }

});

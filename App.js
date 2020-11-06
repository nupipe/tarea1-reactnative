import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.headerNameText}>Felipe Carmona</Text>
              <Text style={styles.headerAgeText}>36</Text>
            </View>
            <Image source={{ uri: 'https://picsum.photos/seed/picsum/200' }} style={styles.image}/>
          </View>
          <View style={styles.bioContainer}>
            <Text style={styles.sectionText}>Bio:</Text>
            <Text style={styles.bioText}>Emprendedor</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionText}>Descripción:</Text>
            <View style={styles.descriptionTextContainer}>
              <Text style={styles.detailTextLeft}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Text>
              <Text style={styles.detailTextRight}>
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </View>
            
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 10,
    margin: 5
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  headerNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerAgeText: {
    fontSize: 15,
    color: 'white'
  },
  bioContainer: {
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  sectionText: {
    color: 'darkgrey',
    marginBottom: 10
  },
  bioText: {
    
  },
  detailTextLeft: {
    flex: 1,
    textAlign: 'justify',
    marginRight: 5
  },
  detailTextRight: {
    flex: 1,
    textAlign: 'justify',
    marginLeft: 5
  },
  descriptionTextContainer: {
    flexDirection: 'row',
  }
});

export default App;

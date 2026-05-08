import React from 'react';

import {

  View,
  Text,
  StyleSheet

} from 'react-native';

export default function ContactScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Contact Us
      </Text>

      <Text style={styles.text}>
        support@esportsarena.com
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
  },

  text: {
    color: 'lightgray',
    fontSize: 18,
  }

});
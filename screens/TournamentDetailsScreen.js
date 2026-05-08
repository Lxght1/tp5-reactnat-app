import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function TournamentDetailsScreen({ route, navigation }) {
  const { title } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>
        <Text style={styles.section}>Tournament Info</Text>
        <Text style={styles.text}>Prize Pool: $5000</Text>
        <Text style={styles.text}>Status: Open</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => 
          navigation.navigate('Main', { 
            screen: 'Register', 
            params: { prefilledGame: title } 
          })
        }
      >
        <Text style={styles.buttonText}>Join Tournament</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  title: { color: 'white', fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#1e293b', padding: 20, borderRadius: 15, marginBottom: 20 },
  section: { color: '#22c55e', fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  text: { color: 'white', fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#22c55e', padding: 18, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useAppContext } from '../AppContext';

export default function RegisterScreen({ route }) {
  const { userProfile } = useAppContext();
  
  const [team, setTeam] = useState(userProfile.team);
  const [captain, setCaptain] = useState(userProfile.username);
  const [game, setGame] = useState('');

  // Listen for the prefilled game parameter from Tournament Details
  useEffect(() => {
    if (route.params?.prefilledGame) {
      setGame(route.params.prefilledGame);
    }
  }, [route.params?.prefilledGame]);

  const submit = () => {
    if (team === '' || captain === '' || game === '') {
      Alert.alert('Error', 'Please fill all fields');
    } else {
      Alert.alert('Success', `Registered ${team} for ${game}!`);
      setGame(''); // Reset after success
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Team Registration</Text>

      <TextInput style={styles.input} placeholder="Team Name" placeholderTextColor="gray" value={team} onChangeText={setTeam} />
      <TextInput style={styles.input} placeholder="Captain Username" placeholderTextColor="gray" value={captain} onChangeText={setCaptain} />
      <TextInput style={styles.input} placeholder="Game/Tournament" placeholderTextColor="gray" value={game} onChangeText={setGame} />

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Register Team</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  title: { color: 'white', fontSize: 32, fontWeight: 'bold', marginTop: 40, marginBottom: 25, textAlign: 'center' },
  input: { backgroundColor: '#1e293b', color: 'white', padding: 15, borderRadius: 12, marginBottom: 15 },
  button: { backgroundColor: '#22c55e', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});
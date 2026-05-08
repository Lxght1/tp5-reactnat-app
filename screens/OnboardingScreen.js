import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useAppContext } from '../AppContext';

export default function OnboardingScreen() {
  const { setHasOnboarded, setUserProfile } = useAppContext();
  
  const [name, setName] = useState('Gharsallah Mohamed');
  const [username, setUsername] = useState('Light');
  const [rank, setRank] = useState('Master');
  const [team, setTeam] = useState('G2 LCE 2');

  const handleFinishSetup = () => {
    setUserProfile({ name, username, rank, team });
    setHasOnboarded(true); // This instantly switches the app to the main tabs
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text style={styles.title}>Welcome to Arena</Text>
      <Text style={styles.subtitle}>Let's set up your player profile</Text>

      <TextInput style={styles.input} placeholder="Real Name" placeholderTextColor="gray" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Gamer Tag / Username" placeholderTextColor="gray" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Current Rank (e.g., Diamond)" placeholderTextColor="gray" value={rank} onChangeText={setRank} />
      <TextInput style={styles.input} placeholder="Team Name" placeholderTextColor="gray" value={team} onChangeText={setTeam} />

      <TouchableOpacity style={styles.button} onPress={handleFinishSetup}>
        <Text style={styles.buttonText}>Enter Arena</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20, justifyContent: 'center' },
  title: { color: 'white', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { color: '#22c55e', fontSize: 16, textAlign: 'center', marginBottom: 40 },
  input: { backgroundColor: '#1e293b', color: 'white', padding: 15, borderRadius: 12, marginBottom: 15 },
  button: { backgroundColor: '#22c55e', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../AppContext';

export default function ProfileScreen() {
  const { userProfile } = useAppContext();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'P'}</Text>
        </View>
        <Text style={styles.title}>{userProfile.username || 'Player'}</Text>
        <Text style={styles.subtitle}>{userProfile.rank || 'Unranked'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Real Name</Text>
        <Text style={styles.text}>{userProfile.name}</Text>

        <Text style={[styles.sectionTitle, { marginTop: 15 }]}>Active Team</Text>
        <Text style={styles.text}>{userProfile.team || 'Solo Player'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  header: { alignItems: 'center', marginTop: 30, marginBottom: 30 },
  avatar: { width: 100, height: 100, backgroundColor: '#22c55e', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { color: '#0f172a', fontSize: 40, fontWeight: 'bold' },
  title: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#22c55e', fontSize: 18, marginTop: 5 },
  card: { backgroundColor: '#1e293b', padding: 20, borderRadius: 15 },
  sectionTitle: { color: 'gray', fontSize: 14, textTransform: 'uppercase' },
  text: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 5 }
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const games = ['Valorant', 'CS2', 'Fortnite', 'Rocket League', 'League of Legends', 'PUBG'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>Esports Arena</Text>

      <TouchableOpacity 
        style={styles.banner} 
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Tournaments')}
      >
        <Text style={styles.bannerTitle}>Season 2026</Text>
        <Text style={styles.bannerText}>Join online tournaments and compete worldwide</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Live Events</Text>

      <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={() => navigation.navigate('Tournaments')}>
        <View>
          <Text style={styles.cardTitle}>Valorant Masters</Text>
          <Text style={styles.cardText}>Registration Open</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#22c55e" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <View>
          <Text style={styles.cardTitle}>CS2 Global League</Text>
          <Text style={styles.cardText}>Starting in 5 days</Text>
        </View>
        <Ionicons name="time-outline" size={24} color="gray" />
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Popular Games</Text>

      <View style={styles.gamesContainer}>
        {games.map((game, index) => (
          <TouchableOpacity key={index} style={styles.game} activeOpacity={0.7}>
            <Text style={styles.gameText}>{game}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  logo: { color: 'white', fontSize: 34, fontWeight: 'bold', textAlign: 'center', marginTop: 40, marginBottom: 20 },
  banner: { backgroundColor: '#22c55e', padding: 25, borderRadius: 15, marginBottom: 25 },
  bannerTitle: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  bannerText: { color: 'white', marginTop: 10, fontSize: 16 },
  sectionTitle: { color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  card: { backgroundColor: '#1e293b', padding: 20, borderRadius: 15, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  cardText: { color: 'lightgray', marginTop: 8 },
  gamesContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 40 },
  game: { backgroundColor: '#1e293b', width: '48%', padding: 20, borderRadius: 15, marginBottom: 15, alignItems: 'center' },
  gameText: { color: 'white', fontWeight: 'bold' }
});
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function TournamentsScreen({ navigation }) {
  const [search, setSearch] = useState('');

  // Dynamic Data Array
  const tournaments = [
    { id: '1', title: 'Valorant Masters', pool: '$5000', teams: '16/32' },
    { id: '2', title: 'CS2 Clash', pool: '$7000', teams: '20/32' },
    { id: '3', title: 'Fortnite Cup', pool: '$4000', teams: '10/32' },
    { id: '4', title: 'Rocket League Open', pool: '$2500', teams: '8/16' },
  ];

  // Filtering logic based on user input
  const filteredTournaments = tournaments.filter(t => 
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tournaments</Text>

      <TextInput
        style={styles.search}
        placeholder="Search tournament..."
        placeholderTextColor="gray"
        value={search}
        onChangeText={setSearch}
      />

      {filteredTournaments.length > 0 ? (
        filteredTournaments.map((tournament) => (
          <TouchableOpacity
            key={tournament.id}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('TournamentDetails', { title: tournament.title })}
          >
            <Text style={styles.game}>{tournament.title}</Text>
            <Text style={styles.info}>Prize Pool: {tournament.pool}</Text>
            <Text style={styles.info}>Teams: {tournament.teams}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.emptyText}>No tournaments found.</Text>
      )}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  title: { color: 'white', fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  search: { backgroundColor: '#1e293b', color: 'white', padding: 15, borderRadius: 12, marginBottom: 20 },
  card: { backgroundColor: '#1e293b', padding: 20, borderRadius: 15, marginBottom: 20, borderLeftWidth: 4, borderLeftColor: '#22c55e' },
  game: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  info: { color: 'lightgray', marginTop: 10, fontSize: 16 },
  emptyText: { color: 'gray', textAlign: 'center', marginTop: 20, fontSize: 16 }
});
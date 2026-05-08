import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LeaderboardsScreen() {
  const [activeGame, setActiveGame] = useState('Valorant');
  const [expandedTeam, setExpandedTeam] = useState(null);

  const categories = ['Valorant', 'CS2', 'Fortnite'];

  // Game specific leaderboard data
  const leaderboards = {
    Valorant: [
      { id: 1, name: 'Shadow Wolves', pts: 1500, players: ['JettMain99', 'OmenKing', 'SageHeals'] },
      { id: 2, name: 'Nova Esports', pts: 1430, players: ['RazeGod', 'SovaDart', 'KilljoyTurret'] },
    ],
    CS2: [
      { id: 3, name: 'Crimson Squad', pts: 2100, players: ['AWPMaster', 'FlashBangz', 'RushB'] },
      { id: 4, name: 'Cyber Titans', pts: 1950, players: ['DeagleDemon', 'SmokeMid', 'DefuseNinja'] },
    ],
    Fortnite: [
      { id: 5, name: 'Phantom Force', pts: 900, players: ['BuildPro', 'SniperElite'] },
      { id: 6, name: 'Victory Royale', pts: 850, players: ['LootGoblin', 'ZoneWarrior'] },
    ]
  };

  const toggleTeam = (teamId) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Rankings</Text>

      {/* Game Selector */}
      <View style={styles.tabContainer}>
        {categories.map(game => (
          <TouchableOpacity 
            key={game} 
            style={[styles.tab, activeGame === game && styles.activeTab]}
            onPress={() => { setActiveGame(game); setExpandedTeam(null); }}
          >
            <Text style={[styles.tabText, activeGame === game && styles.activeTabText]}>{game}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView>
        {leaderboards[activeGame].map((team, index) => (
          <TouchableOpacity 
            key={team.id} 
            style={styles.teamCard}
            onPress={() => toggleTeam(team.id)}
            activeOpacity={0.8}
          >
            <View style={styles.teamHeader}>
              <Text style={styles.teamRank}>#{index + 1}</Text>
              <Text style={styles.teamName}>{team.name}</Text>
              <Text style={styles.teamPts}>{team.pts} pts</Text>
            </View>

            {/* Expandable Player List */}
            {expandedTeam === team.id && (
              <View style={styles.rosterContainer}>
                <Text style={styles.rosterTitle}>Active Roster:</Text>
                {team.players.map((player, idx) => (
                  <View key={idx} style={styles.playerRow}>
                    <Ionicons name="person" size={14} color="gray" />
                    <Text style={styles.playerText}>{player}</Text>
                  </View>
                ))}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  title: { color: 'white', fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  tabContainer: { flexDirection: 'row', marginBottom: 20, backgroundColor: '#1e293b', borderRadius: 10, padding: 5 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  activeTab: { backgroundColor: '#22c55e' },
  tabText: { color: 'gray', fontWeight: 'bold' },
  activeTabText: { color: 'white' },
  teamCard: { backgroundColor: '#1e293b', padding: 20, borderRadius: 15, marginBottom: 15 },
  teamHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  teamRank: { color: '#22c55e', fontSize: 20, fontWeight: 'bold', width: 40 },
  teamName: { color: 'white', fontSize: 18, flex: 1, fontWeight: 'bold' },
  teamPts: { color: 'lightgray', fontSize: 16 },
  rosterContainer: { marginTop: 15, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#334155' },
  rosterTitle: { color: 'gray', fontSize: 14, marginBottom: 10, textTransform: 'uppercase' },
  playerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  playerText: { color: 'white', marginLeft: 10, fontSize: 16 }
});
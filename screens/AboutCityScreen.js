import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutCityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the City</Text>
      <Text style={styles.content}>
        Malaybalay, officially the City of Malaybalay, is the capital of Bukidnon province in the Philippines.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

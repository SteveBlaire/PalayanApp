import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const features = [
    { id: '1', title: 'City Attraction', image: require('../assets/attraction.png'), screen: 'AttractionScreen' },
    { id: '2', title: 'Dining', image: require('../assets/dining.png'), screen: 'DiningScreen' },
    { id: '3', title: 'Business', image: require('../assets/business.png'), screen: 'BusinessScreen' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Republic of the Philippines</Text>
      <Text style={styles.subtitle}>City of Palayan</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder_building.jpg' }}
        style={styles.banner}
      />
      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(AttractionScreen)} // Navigate to the specific screen
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        horizontal
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardList: {
    paddingVertical: 10,
  },
  card: {
    alignItems: 'center',
    marginRight: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 5,
    fontSize: 14,
  },
});

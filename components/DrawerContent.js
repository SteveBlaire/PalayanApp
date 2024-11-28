import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Text } from 'react-native-paper';

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Avatar.Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Placeholder_civic_logo.png' }}
          size={80}
        />
        <Text style={styles.title}>City of Palayan</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="About Palayan City"
        onPress={() => props.navigation.navigate('About Malaybalay')}
      />
      {/* Add more navigation items here */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

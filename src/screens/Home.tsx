import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.text}>Mdgspace is awesome</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    rootContainer: {
      backgroundColor: '#1a1a1a',
      width: '100%',
      height: '100%',
    },
    text: {
        fontSize: 20,
      color: '#fff',
    }
  });
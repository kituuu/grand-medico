import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const Home = ({navigation}:{navigation:any}) => {
  console.log(navigation);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.text}>This is homepage, App flow will start from here</Text>
      <Pressable
            style={styles.button}
            onPress={() => {
              console.log('Admin');
                navigation.navigate('Admin')
              
            }}>
            <Text style={{fontSize: 20, color: '#fff'}}>Admin</Text>
          </Pressable>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    fontSize: 16,
    backgroundColor: '#1a1a1a',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#054A91',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

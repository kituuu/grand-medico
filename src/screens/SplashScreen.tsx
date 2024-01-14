import {Text, StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';

export const SplashScreen = ({navigation}:{navigation:any}) => {

    return (
      <View style={styles.rootContainer}>
        <View style={{width: '100%'}}>
          <Image
            source={require('../assets/splash.jpg')}
            style={styles.image}
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              console.log('Login');
                navigation.navigate('Login')
              
            }}>
            <Text style={{fontSize: 20, color: '#fff'}}>Start</Text>
          </Pressable>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#FFEEDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#054A91',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    bottom: 100,
    alignSelf: 'center',
  },
});

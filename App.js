import React, { useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { Audio } from 'expo-av';


export default function App() {
  const [sound, setSound] = useState();

  async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
         require('./assets/visions-sample.mp3')
      );
      setSound(sound);
      await sound.playAsync();
  }

  async function stopSound() {
      if (sound) {
          await sound.stopAsync();
          setSound(null);
      }
  }

  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Simple Audio Player</Text>
          <Button title="Play Sound" onPress={playSound} />
          <Button title="Stop Sound" onPress={stopSound} />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

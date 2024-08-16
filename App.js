import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Audio } from "expo-av";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/visions-sample.mp3")
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
    <LinearGradient
      colors={["#1e5267", "#1e2e67", "#331e67"]}
      style={styles.container}
    >
      <Svg height="85" width="100%" viewBox="0 0 1440 320" style={styles.svg}>
        <Path
          fill="#451e67"
          d="M0,160L48,160C96,160,192,160,288,165.3C384,171,480,181,576,176C672,171,768,149,864,138.7C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg>
      <Text style={styles.text}>Audio Player</Text>
      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={stopSound}>
        <Text style={styles.buttonText}>STOP</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  svg: {
    position: 'absolute',
    top: 0,
  },
  button: {
    backgroundColor: "#1e5267",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;

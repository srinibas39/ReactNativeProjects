import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../store/AuthContext';

function WelcomeScreen() {

  const [text, setText] = useState("")

  const { token } = useAuth()


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://auth-app-d6ce4-default-rtdb.firebaseio.com/greet.json?auth=${token}`);
        setText(res.data)

      } catch (err) {
        console.log(err.message)
      }
    })()
  }, [])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    color: "blue"
  }
});

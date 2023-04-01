
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { GameStart } from './screens/GameStart';
import { Game } from './screens/Game';
import { GameEnd } from './screens/GameEnd';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [renderItem, setRenderItem] = useState<string>("GameStart")
  const [no, setNo] = useState(0)
  const [rounds, setRounds] = useState(0);

  const changeScreen = (no: number) => {
    if (no) {
      setNo(no)
      setRenderItem("Game")
    }
    else {
      setRenderItem("GameStart")
    }
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <LinearGradient
        style={styles.gradient}
        colors={['#4c669f', '#3b5998', '#192f6a']}
      >
        <SafeAreaView style={styles.SafeAreaView}>
          {
            renderItem === "GameStart" && <GameStart changeScreen={changeScreen} />
          }
          {
            renderItem === "Game" && <Game userNumber={no} setRenderItem={setRenderItem} rounds={rounds} setRounds={setRounds} />
          }

          {
            renderItem === "GameEnd" && <GameEnd no={no} setNo={setNo} rounds={rounds} setRounds={setRounds} setRenderItem={setRenderItem} />
          }

          <ImageBackground
            resizeMode="contain"
            source={require("./assets/shield.png")}
            style={styles.image}
          >
          </ImageBackground>

        </SafeAreaView>

      </LinearGradient>
    </View>

  );
}

const styles = StyleSheet.create({
  gradient: {
    height: "100%",
  },
  image: {
    flex: 1,
    opacity: 0.15
  },
  SafeAreaView: {
    flex: 1
  }

});

export default App;

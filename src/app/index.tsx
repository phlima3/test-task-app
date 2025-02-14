import { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { getRandomColor } from "@/src/utils/getRandomColor";

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState<string>("white");
  const [tapCount, setTapCount] = useState<number>(0);
  const [pastColors, setPastColors] = useState<string[]>([]);

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
    setTapCount((prevCount) => (prevCount < 20 ? prevCount + 1 : prevCount));

    setPastColors((prevColors) => {
      if (prevColors.length < 20) {
        return [bgColor, ...prevColors];
      }
      return prevColors;
    });
  };

  const choosePreviousColor = (color: string) => {
    setBgColor(color);
  };

  const resetAppState = () => {
    setBgColor("white");
    setTapCount(0);
    setPastColors([]);
  };

  return (
    <TouchableWithoutFeedback onPress={changeBackgroundColor}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={[styles.text]}>Hello there</Text>
        <Text style={[styles.counter]}>Taps: {tapCount}</Text>

        <View style={styles.listWrapper}>
          <FlashList
            data={pastColors}
            keyExtractor={(_, index) => index.toString()}
            estimatedItemSize={50}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => choosePreviousColor(item)}
                style={[styles.colorBox, { backgroundColor: item }]}
              />
            )}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={resetAppState}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#00000033",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  counter: {
    fontSize: 18,
    marginTop: 10,
  },
  listWrapper: {
    marginTop: 20,
    maxHeight: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  colorBox: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#00000033",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#00000033",
    borderRadius: 5,
  },
  resetText: {
    color: "white",
  },
});

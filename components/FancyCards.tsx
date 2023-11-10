import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

export default function FancyCards() {
  // const [cards, setCards] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const data = ['red', 'blue', 'green', 'white', 'grey'];
  const screenWidth = useWindowDimensions().width;

  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <Image
        source={{
          uri: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
        }}
        style={styles.cardImage}
      />
      <ScrollView horizontal={true}>
        {data.map(_item => {
          return (
            <View
              key={_item}
              style={{
                ...styles.card,
                width: screenWidth / 3.5,
                backgroundColor: _item,
              }}>
              <Text>{_item}</Text>
              <Image
                source={{
                  uri: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
                }}
                style={styles.cardImage}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: 'grey',
    borderRadius: 8,
    margin: 8,
    padding: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    height: 120,
  },
  cardImage: {
    height: 50,
  },
});

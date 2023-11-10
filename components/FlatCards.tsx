import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

export default function FlatCards() {
  // const [cards, setCards] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const data = ['red', 'blue', 'green', 'white', 'grey'];
  const screenWidth = useWindowDimensions().width;

  const imgUrl =
    'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg';
  const openUrl = 'https://harshkeshri.com';

  const openLink = async () => {
    try {
      await Linking.openURL(openUrl);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <ScrollView horizontal={true}>
        {data.map(_item => {
          return (
            <TouchableOpacity key={_item} onPress={openLink}>
              <View
                style={{
                  ...styles.card,
                  width: screenWidth / 3.5,
                  backgroundColor: _item,
                }}>
                <Image
                  source={{
                    uri: imgUrl,
                  }}
                  style={styles.cardImage}
                />
              </View>
            </TouchableOpacity>
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

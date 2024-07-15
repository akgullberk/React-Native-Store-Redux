import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    padding: windowHeight * 0.01,
    margin: windowHeight * 0.01,
    backgroundColor: 'white',
    borderRadius: windowHeight * 0.01,
  },
});

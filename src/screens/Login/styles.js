import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  logo: {
    resizeMode: 'contain',
    width: windowWidth * 1,
    height: windowHeight * 0.3,
  },
  logo_container: {
    alignItems: 'center',
    marginTop: windowHeight * 0.05,
  },
  body_container: {
    marginTop: windowHeight * 0.05,
  },
});

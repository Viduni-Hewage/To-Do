import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    marginTop: 350,

  },
  text: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 12,
  },
  subtext: {
    fontSize: 19,
    color: '#fff',
    marginTop: 28,
    textAlign: 'center',
  },

  nextContainer: {
    alignSelf: 'center',
    bottom: -90,
  },
  nextText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default styles;

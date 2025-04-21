import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    marginTop: 320,

  },
  text: {
    fontSize: 25,
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
    marginTop: 35,
    textAlign: 'center',
  },
  skipContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    marginRight:10,
  },
  nextContainer: {
    alignSelf: 'center',
    bottom: -110,
  },
  nextText: {
    fontSize: 19,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;

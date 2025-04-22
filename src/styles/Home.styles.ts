import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'black',
  },
  centerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  centerBox: {
    marginTop: 20,
    marginHorizontal: 120,
    padding: 4,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
  },
  centerText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#4799B5',
    fontWeight: '900',
  },
  bottomText: {
    fontSize: 19,
    marginTop: 30,
    marginLeft: 40,
    textAlign: 'left',
    color: 'white',
    fontWeight: '700',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 75,
    left: 20,
    right: 20,
  },
});

export default styles;

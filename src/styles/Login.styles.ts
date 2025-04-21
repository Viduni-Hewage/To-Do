import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 35,
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  logo: {
    width: 35,
    height: 35,
    marginLeft: 20,
    marginTop: -45,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#54C3E6',
  },
  input: {
    height: 48,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 25,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 40,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
  },
  linkText: {
    fontSize: 14,
    color: '#007bff',
  },
});

export default styles;

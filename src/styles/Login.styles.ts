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
    fontWeight: '600',
    color: 'white',
  },
  subtitle1: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  logo: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginTop: -45,
  },
  subtitle2: {
    fontSize: 19,
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#54C3E6',
  },
  input: {
    height: 48,
    backgroundColor: '#333333',
    color:'#999494',
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

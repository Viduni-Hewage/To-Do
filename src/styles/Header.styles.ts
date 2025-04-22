import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: '#000', 
    elevation: 4,
  },
  left: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
  },
  right: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  menu: {
    width: 24,
    height: 24,
    tintColor: '#fff', // White icon color
  },
  backIcon: {
    width: 24,
    height: 24,
     // White back icon
  },
});

export default styles;

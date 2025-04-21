import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginTop: hp('45%'),
  },
  textWrapper: {
    marginTop: hp('30%'), // 👈 moves only the text downward
  },
  text: {
    fontSize: 21,
    color: 'white',
    fontWeight: '500',
  },
});

export default styles;

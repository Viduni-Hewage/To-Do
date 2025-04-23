import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
      },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: hp('16%'),
      paddingHorizontal: wp('5%'),
    },
    image: {
      width: 110,
      height: 110,
      marginTop: hp('13%'),
    },
    title: {
      marginTop: hp('5%'),
      fontSize: 25,
      fontWeight: 900,
      color: 'white',

    },
    button: {
      position: 'absolute',
      bottom: hp('8%'),
      width: '80%',
      paddingVertical: 15,
      borderRadius: 25,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    arrow: {
        width: 50,
        height: 20,
    },
  });

export default styles;
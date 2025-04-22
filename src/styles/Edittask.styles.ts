import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'black',
      paddingTop: 40,
    },
    container: {
      padding: 18,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#54C3E6',
      marginTop: 20,
      marginBottom: 10,
      textAlign:'center',
    },
    underline: {
      height: 1,
      backgroundColor: 'white',
      width: wp('90%'),
      marginBottom: hp('6%'),
      alignSelf: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#54C3E6',
    },
    input: {
        height: 48,
        backgroundColor: '#333333',
        color:'#DDD9D9',
        marginBottom: 25,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    button: {
      flex: 1,
      padding: 13,
      borderRadius: 8,
      alignItems: 'center',
      marginHorizontal: 14,
    },
    cancelButton: {
      backgroundColor: 'black',
      borderWidth: 1, 
      borderColor: 'white',
    },
    confirmButton: {
      backgroundColor: '#1E8BC6',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 17,
    },
    inputIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        backgroundColor: '#333333',
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
      },
      inputText: {
        fontSize: 16,
        color: '#999494',
      },
      image1:{
        width: 23,
        height: 23,
        marginRight: wp('3%'),
      },
      image2:{
        width: 20,
        height: 20,
        marginRight: wp('3%'),
      },
  });

  export default styles;
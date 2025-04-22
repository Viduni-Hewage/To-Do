import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
    marginBottom: hp('2%'),
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 75,
    left: 20,
    right: 20,
  },
  taskBox: {
    padding: wp('2%'),
    paddingLeft: wp('4%'),
    marginBottom: hp('2%'),
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
    color: 'white',
  },
  description: {
    fontSize: 15,
    marginBottom: 4,
    color: 'white',
  },
  dateTime: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: 'white',
  },
  underline: {
    height: 1,
    backgroundColor: 'white',
    width: wp('83%'),
    marginTop: 5,
    marginBottom: 7,
    alignSelf: 'center',
  },
  dateAndTrashContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trashIconContainer: {
    padding: 5,
  },
  trashIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  taskTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  edit:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
  },
});

export default styles;

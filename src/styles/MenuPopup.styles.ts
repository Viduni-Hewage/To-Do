import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: width * 0.7,
    height: '100%',
    backgroundColor: '#1E8BC6',
    zIndex: 2,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    fontSize: 18,
    width: wp('100%'),
    padding:wp('5%'),
    paddingLeft: wp('8%'),
    borderWidth: 0.6,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeItem: {
    backgroundColor: '#cde5ff',
  },
  itemText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 500,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: wp('9%'),
    marginLeft: -1, // Space between the icon and text
  },
  closeButtonTop: {
    position: 'absolute',
    top: hp('6%'),
    left: hp('4%'),
    zIndex: 3,
  },
  closeimage: {
    width: wp('7%'),
    height: wp('7%'),
  },
  signOutContainer: {
    position: 'absolute',
    bottom: hp('2%'), 
    width: '100%',
    paddingLeft: wp('4%'),
  },
  signOutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  signoutImage: {
    width: 17,
    height: 17,
    marginRight: 8,
  },
  signoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    paddingRight: wp('2%'),
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('8%'),
    marginTop: hp('17%'),
    paddingLeft: wp('10%'),
  },
  wave: {
    width: 28,
    height: 28,
    marginLeft: wp('2%'),
  },
});

export default styles;
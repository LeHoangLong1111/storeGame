import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import globalStyle from '../../theme/globalStyle';

export default class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerText}>
              Hello <Text style={globalStyle.fontW700}>Long,</Text>
            </Text>
            <Text style={globalStyle.textColor}>Best game for to days</Text>
          </View>

          <View style={styles.userAvatar}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  headerText: {
    ...globalStyle.textColor,
    ...globalStyle.h1,
    ...globalStyle.fontW300,
  },

  userAvatar: {
    height: 50,
    width: 50,
    backgroundColor: '#bbb',
    borderRadius: 50,
  },
});

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {BackgroundView} from '../../components';
import globalStyle from '../../theme/globalStyle';

export default class UserScreen extends Component {
  render() {
    return (
      <BackgroundView style={styles.cenItem}>
        <Text style={[globalStyle.h1, globalStyle.textColor]}> UserScreen</Text>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  cenItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

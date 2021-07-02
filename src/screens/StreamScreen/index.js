import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BackgroundView} from '../../components';
import globalStyle from '../../theme/globalStyle';

export default class StreamScreen extends Component {
  render() {
    return (
      <BackgroundView style={styles.cenItem}>
        <Text style={[globalStyle.h1, globalStyle.textColor]}> Streaming </Text>
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

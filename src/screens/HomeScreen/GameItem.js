import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {navigationWithoutProps} from '../../navigation/rootNavigation';
import {useNavigation} from '@react-navigation/native';

const {width: screenWith} = Dimensions.get('window');

export default function GameItem(props) {
  const {gameItem} = props;
  const navigation = useNavigation();
  // console.log('propsGameItem:', gameItem);

  return (
    <TouchableWithoutFeedback
      style={{height: 280}}
      onPress={() => navigationWithoutProps('DetailScreen', {id: gameItem.id})}>
      <Image source={{uri: gameItem.preview[0]}} style={styles.gameBanner} />
      <View
        style={[styles.gameInfo, {backgroundColor: gameItem.backgroundColor}]}>
        <Image source={{uri: gameItem.icon}} style={styles.gameIcon} />
        <View style={styles.gameInfoContent}>
          <Text style={[styles.textColor, styles.textTitle]}>
            {gameItem.title}
          </Text>
          <Text style={[styles.textColor, styles.textSub]}>
            {gameItem.subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  gameBanner: {
    // height: 200,
    aspectRatio: 18 / 9,
    width: screenWith,
  },
  gameInfo: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '10%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  gameInfoContent: {
    width: '80%',
  },
  gameIcon: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  textColor: {color: '#fff'},
  textTitle: {fontSize: 20, fontWeight: '700'},
  textSub: {fontSize: 14, fontWeight: '300'},
});

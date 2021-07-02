import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, StreamScreen, UserScreen} from '../screens';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {View, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  style: {backgroundColor: '#819ee5', borderTopWidth: 0},
  showLabel: false,
};

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color}) => {
    let iconName;
    // const backgroundColor = focused ? '#819ee5': '#343434';
    const backgroundColor = '#819ee5';
    const size = focused ? 30 : 20;
    switch (route.name) {
      case 'HomeTab':
        iconName = 'home';
        break;
      case 'StreamTab':
        iconName = 'game-controller';
        break;
      case 'UserTab':
        iconName = 'user';
        break;

      default:
        break;
    }
    return (
      <View
        style={[
          {backgroundColor},
          styles.tabBarIconContent,
          focused && styles.active,
        ]}>
        <EntypoIcon name={iconName} size={size} color="#fff" />
      </View>
    );
  },
});

const RootTab = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="StreamTab" component={StreamScreen} />
      <Tab.Screen name="UserTab" component={UserScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIconContent: {
    // paddingHorizontal: 20,
    // paddingVertical: 5,
    // borderRadius: 20
    height: 40,
    width: 40,
    alignItems: 'center',
    borderRadius: 20,
  },

  active: {
    position: 'absolute',
    bottom: 5,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
  },
});

export default RootTab;

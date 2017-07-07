import React from 'react';
import Swiper from 'react-native-swiper';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  View,
  StyleSheet,
  Text,
  Button,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 25,
    color: '#bbc1cd'
  },
  titleBlue:{
    color: '#546786',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 27
  },
  arrowTitle: {
    justifyContent: 'space-between'
  }
});

export class MainTitle extends React.Component{

  render(){
    return(
      <View>
      <Text style={styles.title}>Jorge Luis Camargo Resines | 16-09-1087 </Text>
      <Text style={[styles.subtitle, styles.titleBlue]}>{this.props.subtitle}</Text>
        <View
        style={{
          borderBottomColor: '#f6f8f9',
          borderBottomWidth: 1,
        }}
      />
      </View>
    );
  }
}

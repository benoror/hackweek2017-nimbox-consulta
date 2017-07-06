import React from 'react';
import Swiper from 'react-native-swiper';
import { StackNavigator } from 'react-navigation';
import {
  View,
  StyleSheet,
  Text,
  Button,
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
  }
});

const viewStyle = () => {
  return {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const Left = ({ navigation }) => (
  <View>
    <Text>Left</Text>
    <Button
      onPress={() => navigation.navigate('Nested')}
      title="Ir a ruta anidada"
    />
  </View>
);
Left.navigationOptions = {
  title: 'Left Screen',
};

const Nested = ({ navigation }) => (
  <View>
    <Text>Screen anidado</Text>
  </View>
)
Nested.navigationOptions = {
  title: 'Screen anidado',
};

const LeftScreen = StackNavigator({
  Left: { screen: Left },
  Nested: { screen: Nested },
});

const Home = () => (
  <Swiper
  loop={false}
  showsPagination={false}
  index={1}>
    <LeftScreen />
    <Swiper
    horizontal={false}
    loop={false}
    showsPagination={false}
    index={1}>
      <View style={viewStyle()}>
        <Text>
          Top
        </Text>
      </View>
      <View style={viewStyle()}>
        <Text>
          Home
        </Text>
      </View>
      <View style={viewStyle()}>
        <Text>
          Bottom
        </Text>
      </View>
    </Swiper>
    <View style={viewStyle()}>
      <Text>
        Right
      </Text>
    </View>
  </Swiper>
);

export default Home;

import React from 'react';
import Swiper from 'react-native-swiper';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

import { CoordinatorLayout, BottomSheetBehavior} from 'react-native-bottom-sheet-behavior';
import CustomActionSheet from 'react-native-custom-action-sheet';

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

const BottomSheetAndroid = () => (
  <CoordinatorLayout style={{flex: 1}}>
    <View style={{ flex: 1, backgroundColor: 'transparent' }}></View>
    <BottomSheetBehavior
      ref='bottomSheet'
      peekHeight={70}
      hideable={false}
      state={BottomSheetBehavior.STATE_COLLAPSED}>
      <View style={{backgroundColor: '#4389f2'}}>
        <View style={{padding: 26}}>
          <Text>Opcion A</Text>
          <Text>Opcion B</Text>
          <Text>Opcion C</Text>
        </View>
        <View style={{height: 200, backgroundColor: '#fff'}} />
      </View>
    </BottomSheetBehavior>
  </CoordinatorLayout>
);

class BottomSheetIOS extends React.Component {
  render() {
    return (
      <View>
        <CustomActionSheet modalVisible={this.props.modalVisible} onCancel={this.props.closeModal}>
          <View>
            <Text>Opcion A</Text>
            <Text>Opcion B</Text>
            <Text>Opcion C</Text>
          </View>
        </CustomActionSheet>
      </View>
    );
  }
}

class BottomSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    if(Platform.OS === 'android')
      return (
        <View>
        <Button
          onPress={() => this.openModal()}
          title="Abrir BottomSheet"
        />
        <BottomSheetAndroid modalVisible={this.state.modalVisible} closeModal={this.closeModal.bind(this)} />
        </View>
      );
    if(Platform.OS === 'ios')
      return (
        <View>
        <Button
          onPress={() => this.openModal()}
          title="Abrir BottomSheet"
        />
        <BottomSheetIOS modalVisible={this.state.modalVisible} closeModal={this.closeModal.bind(this)} />
        </View>
      );
  }
};

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
      <BottomSheet />
    </View>

  </Swiper>
);

export default Home;

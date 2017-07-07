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

import { CoordinatorLayout, BottomSheetBehavior} from 'react-native-bottom-sheet-behavior';
import CustomActionSheet from 'react-native-custom-action-sheet';
import { MainTitle as MainTitle } from './components.js';

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
  },
  optionTitle: {
    fontSize: 18
  },
  optionContent: {
    fontSize: 13
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
  static defaultProps= {
    firstOptionTitle: 'Dolor de panza',
    firstOptionContent: 'A strange game. The only winning move is not to play. How about a nice game of chess?',
    secondOptionTitle: 'Cita Subsecuente',
    secondOptionContent: 'To get the computers to learn from mistakes we couldnt afford to make. Except, I never could get Joshua to learn the most important lesson.',
    thirdOptionTitle: 'Dolor de Garganta',
    thirdOptionContent: 'Futility. That theres a time when you should just give up'
  }

  render() {
    return (
      <View>
        <CustomActionSheet modalVisible={this.props.modalVisible} onCancel={this.props.closeModal}>
          <View>
            <Text style={[styles.titleBlue, styles.optionTitle]}>01. {this.props.firstOptionTitle}</Text>
              <Text style={[styles.titleBlue, styles.optionContent]}>{this.props.firstOptionContent}</Text>
              <View style={{ borderBottomColor: '#f6f8f9', borderBottomWidth: 1, }} />
            <Text style={[styles.titleBlue, styles.optionTitle]}>02. {this.props.secondOptionTitle}</Text>
              <Text style={[styles.titleBlue, styles.optionContent]}>{this.props.secondOptionContent}</Text>
              <View style={{ borderBottomColor: '#f6f8f9', borderBottomWidth: 1, }} />
            <Text style={[styles.titleBlue, styles.optionTitle]}>03. {this.props.thirdOptionTitle}</Text>
              <Text style={[styles.titleBlue, styles.optionContent]}>{this.props.thirdOptionContent}</Text>
              <View style={{ borderBottomColor: '#f6f8f9', borderBottomWidth: 1, }} />
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
          title={this.props.title}
        />
        <BottomSheetAndroid modalVisible={this.state.modalVisible} closeModal={this.closeModal.bind(this)} />
        </View>
      );
    if(Platform.OS === 'ios')
      return (
        <View>
        <Button
          onPress={() => this.openModal()}
          title={this.props.title}
          color='blue'
        />
        <BottomSheetIOS modalVisible={this.state.modalVisible} closeModal={this.closeModal.bind(this)} />
        </View>
      );
  }
};



const Home = () => (
  <View>
    <MainTitle subtitle='Razón de la visita'/>
    <Image source={require('./assets/img/0.png')}/>
    <BottomSheet title='PLANTILLAS'/>
  </View>
);

const HomeTest = () => (
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

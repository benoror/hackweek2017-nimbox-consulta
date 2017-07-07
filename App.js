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
  <Swiper
    loop={false}
    showsPagination={false}
    index={0}>

    <View>
      <MainTitle subtitle='RAZÓN DE LA VISITA'/>
      <Image source={require('./assets/img/0.png')}/>
      <BottomSheet title='PLANTILLAS'/>
    </View>

    {/*--------------- 1 view */}
    <Swiper
      loop={false}
      showsPagination={false}
      index={0}>
      <View>
        <MainTitle subtitle='SÍNTOMAS SUBJETIVOS'/>
        <Image source={require('./assets/img/0.png')}/>
        <BottomSheet title='PLANTILLAS'/>
      </View>

      {/*--------------- 2 view */}
      <Swiper
        loop={false}
        showsPagination={false}
        index={0}>
        <View>
          <Image source={require('./assets/img/1.png')}/>
        </View>

        {/*--------------- 3 view */}
        <Swiper
          loop={false}
          showsPagination={false}
          index={0}>
          <View>
            <MainTitle subtitle='SÍNTOMAS SUBJETIVOS'/>
            <Image source={require('./assets/img/2.png')}/>
            <BottomSheet title='PLANTILLAS'/>
          </View>

          {/*--------------- 4 view */}
          <Swiper
            horizontal={true}
            loop={false}
            showsPagination={false}
            index={0}>
            <View>
              <MainTitle subtitle='SÍNTOMAS SUBJETIVOS'/>
              <Image source={require('./assets/img/3.png')}/>
              <BottomSheet title='PLANTILLAS'/>
            </View>

            {/*--------------- 5 view */}
            <Swiper
              horizontal={false}
              loop={false}
              showsPagination={false}
              index={0}>
              <View>
                <MainTitle subtitle='SIGNOS VITALES'/>
                <Image source={require('./assets/img/4.png')}/>
              </View>

              {/*--------------- 6 view */}
              <Swiper
                horizontal={false}
                loop={false}
                showsPagination={false}
                index={0}>
                <View>
                  <MainTitle subtitle='SIGNOS VITALES'/>
                  <Image source={require('./assets/img/5.png')}/>
                </View>

                {/*--------------- 7 view */}
                <Swiper
                  loop={false}
                  showsPagination={false}
                  index={0}>
                  <View>
                    <MainTitle subtitle='SIGNOS VITALES'/>
                    <Image source={require('./assets/img/6.png')}/>
                  </View>

                  {/*--------------- 8 view */}
                  <Swiper
                    horizontal={true}
                    loop={false}
                    showsPagination={false}
                    index={0}>
                    <View>
                      <MainTitle subtitle='EXAMEN FÍSICO'/>
                      <Image source={require('./assets/img/7.png')}/>
                    </View>

                    {/*--------------- 9 view */}
                    <Swiper
                      loop={false}
                      showsPagination={false}
                      index={0}>
                      <View>
                        <MainTitle subtitle='EXAMEN FÍSICO'/>
                        <Image source={require('./assets/img/8.png')}/>
                      </View>

                      {/*--------------- 10 view */}
                      <Swiper
                        loop={false}
                        showsPagination={false}
                        index={0}>
                        <View>
                          <MainTitle subtitle='EXAMEN FÍSICO'/>
                          <Image source={require('./assets/img/9.png')}/>
                          <BottomSheet title='PLANTILLAS'/>
                        </View>

                        {/*--------------- 11 view */}
                        <Swiper
                          loop={false}
                          showsPagination={false}
                          index={0}>
                          <View>
                            <MainTitle subtitle='EXAMEN FÍSICO'/>
                            <Image source={require('./assets/img/10.png')}/>
                          </View>

                          {/*--------------- 12 view */}
                          <Swiper
                            loop={false}
                            showsPagination={false}
                            index={0}>
                            <View>
                              <MainTitle subtitle='DIAGNÓSTICO'/>
                              <Image source={require('./assets/img/11.png')}/>
                            </View>

                            {/*--------------- 13 view */}
                            <Swiper
                              loop={false}
                              showsPagination={false}
                              index={0}>
                              <View>
                                <MainTitle subtitle='DIAGNÓSTICO'/>
                                <Image source={require('./assets/img/12.png')}/>
                              </View>

                              {/*--------------- 14 view */}
                              <Swiper
                                loop={false}
                                showsPagination={false}
                                index={0}>
                                <View>
                                  <MainTitle subtitle='DIAGNÓSTICO'/>
                                  <Image source={require('./assets/img/13.png')}/>
                                </View>

                                {/*--------------- 15 view */}
                                <Swiper
                                  loop={false}
                                  showsPagination={false}
                                  index={0}>
                                  <View>
                                    <MainTitle subtitle='ESTUDIOS DE GABINETE'/>
                                    <Image source={require('./assets/img/14.png')}/>
                                  </View>

                                  {/*--------------- 16 view */}
                                  <Swiper
                                    loop={false}
                                    showsPagination={false}
                                    index={0}>
                                    <View>
                                      <MainTitle subtitle='ESTUDIOS DE GABINETE'/>
                                      <Image source={require('./assets/img/15.png')}/>
                                    </View>

                                    {/*--------------- 17 view */}
                                    <Swiper
                                      loop={false}
                                      showsPagination={false}
                                      index={0}>
                                      <View>
                                        <MainTitle subtitle='ESTUDIOS DE GABINETE'/>
                                        <Image source={require('./assets/img/16.png')}/>
                                      </View>

                                      {/*--------------- 18 view */}
                                      <Swiper
                                        loop={false}
                                        showsPagination={false}
                                        index={0}>
                                        <View>
                                          <MainTitle subtitle='MEDICAMENTOS'/>
                                          <Image source={require('./assets/img/17.png')}/>
                                        </View>

                                        {/*--------------- 19 view */}
                                        <Swiper
                                          loop={false}
                                          showsPagination={false}
                                          index={0}>
                                          <View>
                                            <MainTitle subtitle='MEDICAMENTOS'/>
                                            <Image source={require('./assets/img/18.png')}/>
                                          </View>

                                          {/*--------------- 20 view */}
                                          <Swiper
                                            loop={false}
                                            showsPagination={false}
                                            index={0}>
                                            <View>
                                              <MainTitle subtitle='MEDICAMENTOS'/>
                                              <Image source={require('./assets/img/19.png')}/>
                                            </View>

                                            {/*--------------- 21 view */}
                                            <Swiper
                                              loop={false}
                                              showsPagination={false}
                                              index={0}>
                                              <View>
                                                <MainTitle subtitle='INSTRUCCIONES MÉDICAS'/>
                                                <Image source={require('./assets/img/20.png')}/>
                                              </View>

                                              {/*--------------- 22 view */}
                                              <Swiper
                                                loop={false}
                                                showsPagination={false}
                                                index={0}>
                                                <View>
                                                  <MainTitle subtitle='INSTRUCCIONES MÉDICAS'/>
                                                  <Image source={require('./assets/img/21.png')}/>
                                                  <BottomSheet title='PLANTILLAS'/>
                                                </View>

                                                {/*--------------- 23 view */}
                                                <Swiper
                                                  loop={false}
                                                  showsPagination={false}
                                                  index={0}>
                                                  <View>
                                                    <MainTitle subtitle='RESUMEN DE CONSULTA'/>
                                                    <Image source={require('./assets/img/22.png')}/>
                                                  </View>

                                                </Swiper>

                                              </Swiper>

                                            </Swiper>

                                          </Swiper>

                                        </Swiper>

                                      </Swiper>

                                    </Swiper>

                                  </Swiper>

                                </Swiper>

                              </Swiper>

                            </Swiper>

                          </Swiper>

                        </Swiper>

                      </Swiper>

                    </Swiper>

                  </Swiper>

                </Swiper>

              </Swiper>

            </Swiper>

          </Swiper>

        </Swiper>

      </Swiper>

    </Swiper>

  </Swiper>
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

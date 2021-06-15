import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

import { images, COLORS as c, SIZES as s, FONTS, SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import { CustomButton } from '../components';

const Login = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: s.height > 700 ? '65%' : '60%',
        }}
      >
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[c.transparent, c.black]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: '80%',
                color: c.white,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Cozinhando uma comida deliciosa
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: s.padding,
        }}
      >
        <Text
          style={{
            marginTop: s.radius,
            width: '70%',
            color: c.gray,
            ...FONTS.body3,
          }}
        >
          Descubra mais de 1200 receitas de comidas na palma da sua mão
        </Text>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <CustomButton
            buttonText="Entrar"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            colors={[c.darkGreen, c.lime]}
            onPress={() => navigation.replace('Home')}
          />

          <CustomButton
            buttonText="Criar Conta"
            buttonContainerStyle={{
              marginTop: s.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: c.darkLime,
              borderWidth: 1,
            }}
            colors={[]}
            onPress={() => navigation.replace('Home')}
          />
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: c.black,
      }}
    >
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {renderDetail()}
    </View>
  );
};

export default Login;

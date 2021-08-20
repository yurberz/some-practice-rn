import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useTheme} from '@react-navigation/native';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.2;

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/4341/4341155.png',
          }}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          hello!
        </Text>
        <Text style={styles.text}>sign in with acc</Text>

        <View style={styles.button}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#FFA07A', '#CD5C5C']}
              style={styles.signIn}>
              <Text style={styles.textSign}>get started</Text>
              <Ionicons name="ios-chevron-forward" color="#FFF0F5" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa8072',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: '900',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: '900',
  },
});

export default SplashScreen;

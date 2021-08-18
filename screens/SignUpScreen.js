import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fa8072" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>register now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>email</Text>
        <View style={styles.action}>
          <Ionicons name="person-outline" color="#05375a" size={20} />
          <TextInput
            placeholder="your email"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={val => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Ionicons
                name="md-checkmark-circle-outline"
                color="#008000"
                size={20}
              />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>password</Text>
        <View style={styles.action}>
          <Ionicons name="lock-closed-outline" color="#05375a" size={20} />
          <TextInput
            placeholder="your password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity activeOpacity={0.8} onPress={updateSecureTextEntry}>
            <Ionicons
              name={data.secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
              color={data.secureTextEntry ? '#808080' : '#008000'}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>
          confirm password
        </Text>
        <View style={styles.action}>
          <Ionicons name="lock-closed-outline" color="#05375a" size={20} />
          <TextInput
            placeholder="confirm your password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={updateConfirmSecureTextEntry}>
            <Ionicons
              name={
                data.confirm_secureTextEntry ? 'eye-off-outline' : 'eye-outline'
              }
              color={data.confirm_secureTextEntry ? '#808080' : '#008000'}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient colors={['#FFA07A', '#CD5C5C']} style={styles.signIn}>
            <Text style={styles.textSign}>sign up</Text>
          </LinearGradient>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.signIn,
            {
              marginTop: 15,
              borderWidth: 1,
              borderColor: '#fa8072',
            },
          ]}
          onPress={() => navigation.goBack()}>
          <Text style={[styles.textSign, {color: '#CD5C5C'}]}>sign in</Text>
        </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ADFF2F',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#ADFF2F',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default SignUpScreen;

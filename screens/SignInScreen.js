import React, {useState, useContext} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../components/context';
import Users from '../model/dummyData';

const SignInScreen = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandler = (username, password) => {
    const foundUser = Users.filter(itm => {
      return username === itm.username && password === itm.password;
    });

    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert(
        'wrong input!',
        'username or password field cannot be empty.',
        [{text: 'okay'}],
      );
      return;
    }

    if (foundUser.length === 0) {
      Alert.alert('invalid user!', 'username or password is incorrect.', [
        {text: 'okay'},
      ]);
      return;
    }

    signIn(foundUser);
  };

  // const handleValidUser = val => {
  //   if (val.trim().length >= 4) {
  //     setData({
  //       ...data,
  //       isValidUser: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       isValidUser: false,
  //     });
  //   }
  // };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fa8072" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>username</Text>
        <View style={styles.action}>
          <Ionicons name="person-outline" color="#05375a" size={20} />
          <TextInput
            placeholder="username"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={val => textInputChange(val)}
            // onEndEditing={el => handleValidUser(el.nativeEvent.text)}
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

        <View
          style={{
            height: 17,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                username must be 4 characters long
              </Text>
            </Animatable.View>
          )}
        </View>

        <Text style={[styles.text_footer, {marginTop: 35}]}>password</Text>
        <View style={styles.action}>
          <Ionicons name="lock-closed-outline" color="#05375a" size={20} />
          <TextInput
            placeholder="password"
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

        <View
          style={{
            height: 17,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                password must be 6 characters long
              </Text>
            </Animatable.View>
          )}
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.signIn}
            onPress={() => {
              loginHandler(data.username, data.password);
            }}>
            <LinearGradient
              colors={['#FFA07A', '#CD5C5C']}
              style={styles.signIn}>
              <Text style={styles.textSign}>sign in</Text>
            </LinearGradient>
          </TouchableOpacity>
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
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={[styles.textSign, {color: '#CD5C5C'}]}>sign up</Text>
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
    backgroundColor: '#FFF0F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#FFF0F5',
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
    borderBottomColor: '#ffcc00',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#ffcc00',
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
    color: '#FFF0F5',
    fontWeight: '700',
  },
});

export default SignInScreen;

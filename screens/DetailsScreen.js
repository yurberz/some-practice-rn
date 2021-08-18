import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>

      <Button
        onPress={() => navigation.push('details')}
        title="go to detailsScreen... again"
      />
      <Button
        onPress={() => navigation.navigate('home')}
        title="go to homeScreen"
      />
      <Button onPress={() => navigation.goBack()} title="go back" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;

import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <Button
        onPress={() => navigation.navigate('details')}
        title="go to detailsScreen"
      />
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

export default HomeScreen;

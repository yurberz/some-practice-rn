import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>

      <Button onPress={() => alert('wow! you clicked')} title="click!" />
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

export default SettingsScreen;

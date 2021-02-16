import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const styles = StyleSheet.create({
  footer: { backgroundColor: '#4C4D4C', padding: 20, color: '#fff' },
});
function Footer() {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
}
export default Footer;

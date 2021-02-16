import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const styles = StyleSheet.create({
  header: { backgroundColor: '#2ecc71', padding: 20, color: '#fff' },
});
function Header() {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
}
export default Header;

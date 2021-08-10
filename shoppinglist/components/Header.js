import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (defaultProps) => {
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{defaultProps.title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'My Coding skills',
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#FFC947",
  },
  text: {
      color: '#185ADB',
      fontSize: 23,
      textAlign: 'center'
  }
});

export default Header;
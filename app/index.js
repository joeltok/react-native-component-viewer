import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class rncv extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* Insert component here */}
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Replace me with</Text>
          <Text>what you need</Text>
        </View>


      </View>
    );
  }
}


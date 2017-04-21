import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Platform } from 'react-native';
import { clearLikedJobs } from '../actions';
import { Button } from 'react-native-elements';

class SettingsScreen extends Component {
  static navigationOptions = {
    header: {
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }
  render() {
    return (
      <View>
        <Button
          title="Reset Liked Jobs"
          large
          icon={{name: 'delete-forever'}}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
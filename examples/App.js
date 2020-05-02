import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {Alert} from 'react-native-alert-dialogues';
import styles from './styles';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
      type: 'success',
      message: 'Congratulations, You are signed up successfully',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.successButton}
          onPress={() => this.setState({showAlert: true, type: 'success'})}>
          <Text style={styles.title}> Success </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          style={styles.errorButton}
          onPress={() =>
            this.setState({
              showAlert: true,
              type: 'error',
              message: 'Oops, There is something went wrong while signing up.',
            })
          }>
          <Text style={styles.title}> Error </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          style={styles.warningButton}
          onPress={() =>
            this.setState({
              showAlert: true,
              type: 'warning',
              message: 'Attention, The password you chose is not strong.',
            })
          }>
          <Text style={styles.title}> Warning </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          style={styles.confirmButton}
          onPress={() =>
            this.setState({
              showAlert: true,
              type: 'confirm',
              message: 'Are you sure you want to logout from the application.',
            })
          }>
          <Text style={styles.confirmTitle}> Confirm </Text>
        </TouchableHighlight>

        <Alert
          visible={this.state.showAlert}
          type={this.state.type}
          okPressed={() =>
            this.setState({
              showAlert: false,
            })
          }
          confirmed={() =>
            this.setState({
              showAlert: false,
            })
          }
          message={this.state.message}
        />
      </View>
    );
  }
}

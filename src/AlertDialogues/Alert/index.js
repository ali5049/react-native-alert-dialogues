import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import styles from './styles';
import PropTypes from 'prop-types';
// import FullButton from '../Buttons/FullButton';
export default class AlertDialogue extends Component {
  imageSource = () => {
    if (!this.props.hideIcon) {
      switch (this.props.type) {
        case 'success': {
          return require('../Images/success.png');
        }
        case 'error': {
          return require('../Images/error.png');
        }
        case 'confirm': {
          return require('../Images/confirmation.png');
        }
        case 'warning': {
          return require('../Images/warning.png');
        }
      }
    } else {
      return '';
    }
  };

  title = () => {
    switch (this.props.type) {
      case 'success': {
        return 'Success!';
      }
      case 'error': {
        return 'Error!';
      }
      case 'warning': {
        return 'Warning';
      }
      case 'confirm': {
        return 'Confirm';
      }
    }
  };

  buttonStyle = () => {
    switch (this.props.type) {
      case 'success': {
        return styles.buttonSuccess;
      }
      case 'error': {
        return styles.buttonError;
      }
      case 'confirm': {
        return styles.buttonConfirm;
      }
      case 'warning': {
        return styles.buttonWarning;
      }
    }
  };

  button = () => {
    if (this.props.type !== 'confirm') {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          style={this.buttonStyle()}
          onPress={this.props.okPressed}>
          <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>
        </TouchableHighlight>
      );
    } else {
      return (
        <View style={styles.buttonGroup}>
          <TouchableHighlight
            underlayColor="transparent"
            style={styles.cancelButton}
            onPress={this.props.cancelled}>
            <Text style={styles.buttonTitle}>
              {this.props.cancelTitle ? this.props.cancelTitle : 'Cancel'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="transparent"
            style={styles.okButton}
            onPress={this.props.confirmed}>
            <Text style={styles.buttonTitle}>
              {this.props.okTitle ? this.props.okTitle : 'Ok'}
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
  };

  render() {
    let {title} = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visible}>
        <SafeAreaView
          style={{
            ...styles.container,
            backgroundColor: `rgba(0,0,0,${this.props.opacity})`,
          }}>
          <View style={styles.contentContainer}>
            <Image source={this.imageSource()} style={styles.iconStyle} />
            <Text style={styles.title}>{title ? title : this.title()}</Text>
            <Text style={styles.description}>{this.props.message}</Text>
            <View style={styles.buttonView}>{this.button()}</View>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

AlertDialogue.propTypes = {
  type: PropTypes.oneOf(['error', 'success', 'confirm', 'loader', 'warning']),
  visible: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  opacity: PropTypes.number,
  buttonTitle: PropTypes.string,
  okPressed: PropTypes.func,
  okTitle: PropTypes.string,
  cancelTitle: PropTypes.string,
  confirmed: PropTypes.func,
  cancelled: PropTypes.func,
  hideIcon: PropTypes.bool,
};

AlertDialogue.defaultProps = {
  message: 'Sample messgae to show in case of any alert type',
  opacity: 0.8,
  type: 'success',
  buttonTitle: 'OK',
  hideIcon: false,
};

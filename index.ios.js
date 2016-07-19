import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight } from 'react-native';

import formatTime from 'minutes-seconds-milliseconds';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  timerWrapper: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 60,
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    borderColor: '#7fffd4',
  },
  stopButton: {
    borderColor: '#dc143c',
  },
  lapButton: {

  },
});

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElasped: null,
      timerRunning: false,
    };
    this.onStartPress = this.onStartPress.bind(this);
  }

  onStartPress() {
    if (this.state.timerRunning) {
      clearInterval(this.interval);
      this.setState({
        timerRunning: false,
      });
      return;
    }

    const startTime = new Date();

    this.interval = setInterval(() => {
      this.setState({
        timeElasped: new Date() - startTime,
        timerRunning: true,
      });
    }, 30);
  }

  onLapPress() {
    console.log('Lap was pressed');
  }

  startStopButton() {
    const style = this.state.timerRunning ? styles.stopButton : styles.startButton;

    return (
      <TouchableHighlight
        onPress={this.onStartPress}
        underlayColor="#f5f5dc"
        style={[styles.button, style]}
      >
        <Text>
          {this.state.timerRunning ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    );
  }

  lapButton() {
    return (
      <TouchableHighlight
        onPress={this.onLapPress}
        underlayColor="#f5f5dc"
        style={styles.button}
      >
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.time}>{formatTime(this.state.timeElasped)}</Text>
          </View>

          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={styles.footer}>
          <Text>
            I am list of laps
          </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

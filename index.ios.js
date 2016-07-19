import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  TouchableHighlight } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

import { styles } from './src/styles';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElasped: null,
      timerRunning: false,
      startTime: null,
      laps: [],
    };
    this.onStartPress = this.onStartPress.bind(this);
    this.onLapPress = this.onLapPress.bind(this);
  }

  onStartPress() {
    if (this.state.timerRunning) {
      clearInterval(this.interval);
      this.setState({
        timerRunning: false,
      });
      return;
    }

    this.setState({
      startTime: new Date(),
    });

    this.interval = setInterval(() => {
      this.setState({
        timeElasped: new Date() - this.state.startTime,
        timerRunning: true,
      });
    }, 30);
  }

  onLapPress() {
    const lap = this.state.timeElasped;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat(lap),
    });
  }

  createLaps() {
    return this.state.laps.map((time, idx) => (
      <View key={idx} style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{idx + 1}: {formatTime(time)}
        </Text>
      </View>
    ));
  }

  startStopButton() {
    const style = this.state.timerRunning ? styles.stopButton : styles.startButton;

    return (
      <TouchableHighlight
        onPress={this.onStartPress}
        underlayColor="#e6e6fa"
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
        underlayColor="#e6e6fa"
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
          {this.createLaps()}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

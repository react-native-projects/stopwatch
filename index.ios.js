import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  ScrollView,
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

  // pressing start/stop button
  onStartPress() {
    // check if clock is running, then stop
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

  // pressing lap/restart button
  onLapPress() {
    // Reset timer
    if (!this.state.timerRunning) {
      this.setState({
        timeElasped: new Date(),
        laps: [],
      });
      return;
    }

    const lap = this.state.timeElasped;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat(lap),
    });
  }

  // create laps list
  createLaps() {
    return this.state.laps.map((time, idx) => (
      <View key={idx} style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{idx + 1}: {formatTime(time)}
        </Text>
      </View>
    ));
  }

  // create start/stop buttons
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

  // create the lap button
  lapButton() {
    return (
      <TouchableHighlight
        onPress={this.onLapPress}
        underlayColor="#e6e6fa"
        style={styles.button}
      >
        <Text>
          {this.state.timerRunning ? 'Lap' : 'Reset'}
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

        <ScrollView style={styles.footer}>
          {this.createLaps()}
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

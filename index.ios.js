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
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElasped: null,
    };
    this.onStartPress = this.onStartPress.bind(this);
  }

  onStartPress() {
    const startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElasped: new Date() - startTime,
      });
    }, 30);
  }

  onLapPress() {
    console.log('Lap was pressed');
  }

  startButton() {
    return (
      <TouchableHighlight
        onPress={this.onStartPress}
        underlayColor="#f5f5dc"
      >
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  }

  lapButton() {
    return (
      <TouchableHighlight
        onPress={this.onLapPress}
        underlayColor="#f5f5dc"
      >
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    );
  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 4,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('#f0e68c')]}>
          <View style={[this.border('#b22222'), styles.timerWrapper]}>
            <Text>{formatTime(this.state.timeElasped)}</Text>
          </View>
          <View style={[this.border('#8fbc8f'), styles.buttonWrapper]}>
            {this.startButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={[styles.footer, this.border('#009CDE')]}>
          <Text>
            I am list of laps
          </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

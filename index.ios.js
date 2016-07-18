import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight } from 'react-native';

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
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});

class Stopwatch extends Component {
  onStartPress() {
    console.log('Start was pressed');
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
            <Text>00.00.00</Text>
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

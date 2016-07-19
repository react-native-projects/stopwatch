import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: '#dcdcdc',
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
    backgroundColor: '#dcdcdc',
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
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: '#f0f8ff',
  },
  lapText: {
    fontSize: 20,
  },
});

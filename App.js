import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function addZero(digit) {
  if (digit < 10) {
    return "0" + digit;
  }
  return digit;
}

function display(num) {
  const min = Math.floor(num / 60);
  const sec = num % 60;
  return addZero(min) + ":" + addZero(sec);
}

const Timer = ({ time }) => <Text style={styles.timer}>{display(time)}</Text>;

export default class TimerChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countDownTimer: null,
      countNum: 25 * 60
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    const { countDownTimer } = this.state;

    if (countDownTimer) {
      stop();
    }

    const timer = setInterval(
      () => {
        const { countNum } = this.state;

        let newCountNum = countNum - 1;

        if (newCountNum <= 0) {
          stop();
          newCountNum = 0;
        }
console.log(        this.setState({ ...this.state, countNum: newCountNum }));
        this.setState({ ...this.state, countNum: newCountNum });
      },
      1000
    );

    this.setState({ ...this.state, countDownTimer: timer });
  }

  stop() {
    clearInterval(this.state.countDownTimer);
    this.setState({ ...this.state, countDownTimer: null });
  }

  reset() {
    this.stop();
    this.setState({ ...this.state, countNum: 25 * 60 });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={styles.heading}>Pomodoro Timer</Text>

        <Timer time={this.state.countNum} />

        <View>
          <View
            style={{
              backgroundColor: "green",
              marginBottom: 10,
              borderRadius: 10
            }}
          >
            <Button onPress={this.start} title="Start" color="white" />
          </View>

          <View
            style={{
              backgroundColor: "red",
              marginBottom: 10,
              borderRadius: 10
            }}
          >
            <Button onPress={this.stop} title={"Stop"} color="white" />
          </View>

          <View style={{ backgroundColor: "blue", borderRadius: 10 }}>
            <Button onPress={this.reset} title={"Reset"} color="white" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "tomato"
  },
  timer: {
    fontSize: 50,
    paddingTop: 20,
    paddingBottom: 20
  }
});

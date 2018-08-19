import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class Timer extends Component {
  _onPressButton() {
    ("this is press");
  }
  render() {
    return (
      <View>
        <Text style={styles.timer}>{this.props.time}</Text>

        <View style={{ backgroundColor: "green", marginBottom: 10, borderRadius:10, }}>
          <Button onPress={this._onPressButton} title="Start" color="white" />
        </View>

        <View style={{ backgroundColor: "red", marginBottom: 10, borderRadius:10 }}>
          <Button onPress={this._onPressButton} title={"Stop"} color="white" />
        </View>

        <View style={{ backgroundColor: "blue", borderRadius:10 }}>
          <Button onPress={this._onPressButton} title={"Reset"} color="white" />
        </View>
      </View>
    );
  }
}

export default class TimerChange extends Component {
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
        <Timer time="25:00" />
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
    fontSize: 40,
    paddingTop: 20
  }
});

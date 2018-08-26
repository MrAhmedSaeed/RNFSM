import React from "react";
import { View, TextInput, Button, Dimensions } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={style.Container}>
        <TextInput
          style={style.textInputStyle}
          onChangeText={text => this.setState({ text })}
          placeholder="USER NAME"
        />
        <TextInput
          style={style.textInputStyle}
          onChangeText={text => this.setState({ text })}
          placeholder="PASSWORD"
        />
        <View style={style.buttonStyle}>
          <Button
            onPress={() => {
              this.handelInput;
            }}
            title="Login"
            color="#119EFC"
          />
        </View>
      </View>
    );
  }
}

const style = {
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center"
  },
  textInputStyle: {
    width: Dimensions.width,
    height: 40,
    margin: 8,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray"
  },
  buttonStyle: {
    margin: 8
  }
};

export default App;

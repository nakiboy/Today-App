import { StyleSheet, View, Text } from "react-native";
const styles = StyleSheet.create({
  labelText: {
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 15,
  },
  inputWithLabel: {
    marginBottom: 10,
    marginTop: 5,
  },
  logo: {
    height: "100px",
    width: "100px",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 320,
    width: 310,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "black",
  },
  Button: {
    padding: 20,
    width: 170,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
  },
});

const toastConfig = {
  warning: ({ text1, props }) => (
    <View
      style={{
        height: 40,
        width: "100%",
        backgroundColor: "orange",
        padding: 4,
      }}
    >
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
  done: ({ text1, props }) => (
    <View
      style={{
        height: 30,
        width: "100%",
        backgroundColor: "#1affc6",
        padding: 4,
      }}
    >
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};


export { styles, toastConfig };

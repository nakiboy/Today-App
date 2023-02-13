import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, View, Modal, Text } from "react-native";
import { styles } from "../../../style";

import Scanner from "./QrCodeScreen";

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [account, setAccount] = React.useState("");
  const [qauntity, setQauntity] = React.useState("");
  const [owner, setOwner] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [register, setRegister] = React.useState("");
  const [date, setDate] = React.useState("");

  const onCodeScanned = (
    name,
    code,
    account,
    qauntity,
    owner,
    price,
    register,
    date
  ) => {
    setName(name);
    setCode(code);
    setAccount(account);
    setQauntity(qauntity);
    setOwner(owner);
    setPrice(price);
    setRegister(register);
    setDate(date);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <StatusBar style="auto" />
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Code: {code}</Text>
      <Text style={styles.text}>Account: {account}</Text>
      <Text style={styles.text}>Quantity: {qauntity}</Text>
      <Text style={styles.text}>Owner: {owner}</Text>
      <Text style={styles.text}>Price: {price}</Text>
      <Text style={styles.text}>Register: {register}</Text>
      <Text style={styles.text}>Date: {date}</Text>
      <Button title="Escanear" onPress={() => setModalVisible(true)} />
    </View>
  );
}

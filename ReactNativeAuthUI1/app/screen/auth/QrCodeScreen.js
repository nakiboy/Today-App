import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { storeToken } from "../../../services/AsyncStorageService";
import { useRegisterProductMutation } from "../../../services/userAuthApi";
import Toast from "react-native-toast-message";
import { styles, toastConfig } from "../../../style";

// const ProductSplit = () => {
//   console.log("Бараа материал");
// };

const QrCodeScreen = () => {
  // const [name, setName] = useState("");
  // const [code, setCode] = useState("");
  // const [account, setAccount] = useState("");
  // const [qauntity, setQauntity] = useState("");
  // const [owner, setOwner] = useState("");
  // const [price, setPrice] = useState("");
  // const [Date, setDate] = useState("");
  // const [register, setRegister] = useState("");

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanner, setScanner] = useState(false);
  const [object, setobject] = useState({
    productField: {},
  });

  // const clearTextInput = () => {
  //   setName("");
  //   setCode("");
  //   setAccount("");
  //   setQauntity("");
  //   setOwner("");
  //   setPrice("");
  //   setRegister("");
  //   setDate("");
  //  };
   const navigation = useNavigation();
   const [text, setText] = useState("QR Уншуулах");

   useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
   }, []);
   let formdata = new FormData();


   formdata.append("product[name]", 'test')
formdata.append("product[code]", 10)
formdata.append("product[account][]", 2)
formdata.append("product[qauntity]", '120000000')
formdata.append("product[owner]", 'test')
formdata.append("product[price]", 2000000000)
formdata.append("product[register]", 8)
formdata.append("product[Date]", Date)

fetch('http://192.168.0.112:8000/api/user/product',{
  method: 'post',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  body: formdata
  }).then(response => {
    console.log("DashboardScreen")
  }).catch(err => {
    console.log(err)
  })  

   const [registerProduct] = useRegisterProductMutation();
   const handleFormSubmit = async ({ type, data }) => {
    setScanned(true);
    setText(data);

    const array = data.split("^?");
    if ((array.length = 8)) {
      for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
      }
    }

    // exports.registerProduct = (formData) => {
    //   const product = new Product(formData);
    //   return product.save();
    // };

    const name = data.split("^?").map((s) => s.split(/\s+/g).join(""))[0];
    const code = data.split("^?").map((s) => s.split(/\s+/g).join(""))[1];
    const account = data.split("^?").map((s) => s.split(/\s+/g).join(""))[2];
    const qauntity = data.split("^?").map((s) => s.split(/\s+/g).join(""))[3];
    const owner = data.split("^?").map((s) => s.split(/\s+/g).join(""))[4];
    const price = data.split("^?").map((s) => s.split(/\s+/g).join(""))[5];
    const register = data.split("^?").map((s) => s.split(/\s+/g).join(""))[6];
    const Date = data.split("^?").map((s) => s.split(/\s+/g).join(""))[7];

    const productData = {
      productField: {
        name: name,
        code: code,
        account: account,
        qauntity: qauntity,
        owner: owner,
        price: price,
        register: register,
        Date: Date,
      },
    };
    console.log(productData);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Камер нээхийг зөвшөөрөх үү?</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Камер руу нэвтрэх боломжгүй</Text>
        <Button
          title={"Камера зөвшөөрөх"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Toast config={toastConfig} />
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleFormSubmit}
          style={{ height: 700, width: 700 }}
        />
      </View>
      {/* baraa material utga */}
      {scanned && (
        <Text onPress={() => setScanned(false)} style={styles.maintext}>
          {text}
        </Text>
      )}
      {/* dahin unshuulah */}
      {scanned && (
        <Button
          title={"Дахин оролдох"}
          onPress={() => setScanned(false)}
          color="#5ACBF6"
        />
      )}
      {/* hadgalah button */}
      {scanned && (
        <View style={{ width: 135, alignSelf: "center", margin: 20 }}>
          <Button title="Хадгалах" onPress={handleFormSubmit} color="#19F748" />
        </View>
      )}
    </View>
  );
};
export default QrCodeScreen;

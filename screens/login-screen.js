import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, ScrollView } from "react-native";
import {Button, Input} from 'react-native-elements';
import { PostLogin } from "../services/login";

const LoginScreen = () =>{
    const navigation = useNavigation();

    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const loginpress=()=>{
        
        const logindata = {
            username: mobile,
            password: password,
        };
        PostLogin(logindata).then((res)=>{
            if(res.user_id != ""){
                navigation.navigate("SuccessScreen",{user_id:res.user_id})
            }
        })
    }

    return(
        <ScrollView>
            <View style={styles.contentView}>
                <Input
                    placeholder="MOBILE"
                    style={{...styles.input,marginBottom:0}}
                    onChangeText={(text) => setMobile(text)}
                    value={mobile}
                    maxLength={10}
                    keyboardType="number-pad"
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
                <Input
                    placeholder="PASSWORD"
                    style={{...styles.input,marginBottom:0}}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    maxLength={10}
                    keyboardType="number-pad"
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
            </View>
            <Button
             title="Submit"
             style={{
               backgroundColor: "#1194f6",
               borderRadius: 5,
             }}
             containerStyle={styles.buttonstyles}
             onPress={loginpress}
            />
            <View
                flexDirection="row"
                justifyContent="space-between"
                style={{ marginHorizontal: "10%" }}
            >
            <Button
                title="Register"
                onPress={() => navigation.navigate("RegistrationScreen")}
                titleStyle={{
                color: "#039BE5",
                fontFamily: "serif",
                }}
                type="clear"
            />
            {/* <Button
                title="Forgot Password?"
                onPress={forgotpress}
                titleStyle={{
                color: "#039BE5",
                fontFamily: "serif",
                }}
                type="clear"
            /> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignContent:'center',
      justifyContent:'center',
      marginTop:"50%"
    },
    input: {
      marginHorizontal: 30,
      marginVertical: 10,
      height: 50,
      margin: 1,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      fontFamily: "serif",
    },
    buttonstyles: {
        marginHorizontal: "10%",
        marginVertical: "3%",
        height: 50,
        width: "80%",
      },
  });

export default LoginScreen;

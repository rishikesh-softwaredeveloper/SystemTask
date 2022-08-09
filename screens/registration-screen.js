import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "react-native-elements";
import {Picker} from '@react-native-picker/picker';
import {PostReg} from '../services/reg';

function RegistrationScreen() {
    const navigation = useNavigation();    

    const [name,setName]=useState('');
    const [surName,setSurName]=useState('');
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');
    const [mobile,setMobile]=useState('');
    const [confirmMobile,setConfirmMobile]=useState('');

    const regPress=()=>{
        const regData={
                "name": name,
                "surname": surName,
                "email": " ",
                "membership_vehicle_status": "",
                "gender": gender, 
                "usercategory_id": "1",
                "mobile_number": mobile,
                "booth_id": " ",
                "age": "28",
                "graduate": "yes", 
                "idproof_id": "",
                "confirm_membership_id": "",
                "confirm_mobile_number": confirmMobile,
                "idproof_number": "", 
                "membership_id": "",
                "pincode": " ",
                "door_number": "",
                "street": "  ", 
                "photo": "",
                "vehicle_no": "",
                "query_type":" ",
                "assembly_code":"", 
                "booth_code": "",
                "refered_by": "",
                "smart_phone_status": "",
                "profession": ""
            };
            PostReg(regData).then((Res)=>{
                if(Res){
                    alert("Registered successfuly")
                    navigation.navigate("LoginScreen");    
                }
            })

    }

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Input
                    placeholder="Name"
                    style={{...styles.input,marginBottom:0}}
                    onChangeText={(text) => setName(text)}
                    value={name}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
                <Input
                    placeholder="SurName"
                    style={{...styles.input,marginBottom:0}}
                    onChangeText={(text) => setSurName(text)}
                    value={surName}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
                <Input
                    placeholder="Age"
                    style={{...styles.input,marginBottom:0}}
                    onChangeText={(text) => setAge(text)}
                    value={age}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
                <View style={{borderWidth:1,borderColor:'#000',borderRadius:2,width:"77%",height:60,marginLeft:40}}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) =>
                            setGender(itemValue)
                        }
                        style={{...styles.input}}
                        >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                </View>
                <Input
                    placeholder="Mobile"
                    style={{...styles.input,marginBottom:0}}
                    onChangeText={(text) => setMobile(text)}
                    value={mobile}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
                <Input
                    placeholder="Confirm"
                    style={{...styles.input,marginBottom:0}}
                    onChangeText={(text) => setConfirmMobile(text)}
                    value={confirmMobile}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
                <Button
                    title="Submit"
                    style={{
                    backgroundColor: "#1194f6",
                    borderRadius: 5,
                    }}
                    containerStyle={styles.buttonstyles}
                    onPress={regPress}
                />
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
})

export default RegistrationScreen
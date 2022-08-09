import React,{useEffect, useState} from "react";
import { StyleSheet, View, ScrollView,Text,FlatList } from "react-native";
import { GetRefferals } from "../services/refferals";
import ReferItem from "../components/reffer-item";

const SuccessScreen = ({route}) =>{
    const { user_id } = route.params;
    const [data, setData]=useState([]);
    useEffect(()=>{
        GetRefferals(user_id).then((res)=>{
            setData(res['data']['top_referedmembers_list']) 
        })
    },[])
    return(
        <View style={styles.contentView}>
            <FlatList
            data={data}
            renderItem={({ item }) => (<ReferItem Item={item} />)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default SuccessScreen;

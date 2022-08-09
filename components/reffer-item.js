import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Alert } from "react-native";

const ReferItem = (Item) => {
    
    for (var keys in Item) {
        return (
            <View style={styles.container}>
                <View style={styles.sub_container}>
                    <View style={{ borderWidth: 0, borderColor: "#CCC", margin: 0, padding: 10,paddingBottom:5, borderRadius: 0, width: '100%' }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ paddingBottom: 5 }}>
                                    <Text numberOfLines={2} style={{ color: "#000",fontFamily:'serif', fontWeight: '500',fontSize:17,marginLeft:5}}>{Item[keys]["Assembly Name"].toUpperCase()}</Text>
                                <View style={{ paddingBottom: 0, flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={{ fontWeight: '500',fontFamily:'serif', fontSize:20 }}>{Item[keys]["Name"]}</Text>
                                 </View>
                                 <View style={{ paddingBottom: 0, flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={{ fontWeight: '500',fontFamily:'serif', fontSize:20 }}>{Item[keys]["Mobile Number"]}</Text>
                                 </View>
                            </View>
                        </View>
                    </View>
                  
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        marginVertical: 1, 
        marginHorizontal: 0, 
        borderRadius: 0,
        margin: 0,
        padding: 10,
        borderColor: "#CCC",
        borderBottomWidth:1
    },
    sub_container: {
        flexDirection: 'row',
        padding: 0,
        marginVertical: 0,
    }

});
export default ReferItem;
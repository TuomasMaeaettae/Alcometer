import { View, Text, Pressable } from "react-native";
import React, {useState} from "react";
import Styles from "../Styles";

export default function Radiobutton({options, onPress}) {

    const [value, setValue] = useState(null)

    const handleRadioButtonPress = (selectedValue) => {
        setValue(selectedValue)
        onPress(selectedValue)
    }

    return (
        <>
        {
            options.map((item) => (
                <View key={item.value} style={Styles.buttonContainer}>
                    <Text style={Styles.label}>{item.label}</Text>
                    <Pressable style={Styles.circle} onPress={() => handleRadioButtonPress(item.value)}>
                        {value === item.value && <View style={Styles.checkedCircle}/>}
                    </Pressable>
                </View>
            ))
        }
        </>
    )
}
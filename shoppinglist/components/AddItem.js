import React,{useState}from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);
    return(
    <View>
        <TextInput class="text-input"
        placeholder="Add Item..."
        style={addItemStyles.input}
        onChangeText={onChange}></TextInput>
        <TouchableOpacity style={addItemStyles.btn} onPress={() => 
        addItem(text)}>
            <Text style={addItemStyles.btnText}><Icon
            name="plus"
            size= {20}></Icon>Add Item</Text>
        </TouchableOpacity>
    </View>
    );
};



const addItemStyles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        color: "#185ADB",
    },
    btn: {
        backgroundColor: '#185ADB',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: '#FFC947',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default AddItem;
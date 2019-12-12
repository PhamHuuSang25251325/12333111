import React from 'react';

import { Input } from 'react-native-elements'


const MyInput = ({ placeholder, label, keyboardType, secureTextEntry, meta: { touched, error, warning }, input: { onChange, ...restInput } }) => {
    return (
        <Input
            onChangeText={onChange}
            keyboardType={keyboardType}
            label={label}
            placeholder={placeholder}
            errorMessage={touched && error || warning && warning}
            secureTextEntry={secureTextEntry}
            {...restInput}
        />
    );

}

export default MyInput;


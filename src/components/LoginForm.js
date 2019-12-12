import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { View } from 'react-native'
import Validation from '../lib/Validation'
import MyInput from '../base_components/InputForm'
import { Button } from 'react-native-elements';

const LoginForm = props => {
    const {handleSubmit,onSubmit } = props;
    return (
        <View>
            <Field name="username" keyboardType="default" label="USERNAME " component={MyInput}
                validate={Validation.required}
            />
            <Field name="password" keyboardType="default" label="PASSWORD: " component={MyInput} secureTextEntry={true}
                validate={Validation.required}
            />
            <Button title="ĐĂNG NHẬP" onPress={handleSubmit(onSubmit)}/>
        </View>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)




import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from '../actions/auth';
import LoginForm from '../components/LoginForm';
import authService from '../services/auth';
import { Alert } from 'react-native';


const LoginContainer = (props) => {
    const dispacth = useDispatch();
    const user = useSelector(state=>state.auth.userId)
    const onSubmit =  ({ username, password }) => {
        authService.login(username,password)
            .then(data=>{
                dispacth(authenticate(data))
                props.navigation.navigate('App')
            })
            .catch(err=>{
                console.log(err);
                
            })
    }

    console.log(user);
    

    return (
        <LoginForm onSubmit={onSubmit} />
    )
}

export default LoginContainer;


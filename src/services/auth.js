import client from '../lib/Client';
import { login } from './graphql/mutations/auth';


export default {
    login: (username, password) => {
        return client
            .mutate({
                mutation: login,
                variables: { username, password }
            })
            .then(({ data: { login } }) => {
                return login
            }).catch(err=>{
                throw err
            })
    }
}
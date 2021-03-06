import gql from 'graphql-tag';

export const login = gql`
mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        token
        user {
          id
          name
        }
    }
}
`;



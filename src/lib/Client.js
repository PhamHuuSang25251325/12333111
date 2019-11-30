import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';
import { ApolloLink, split, from } from 'apollo-link';
import { onError } from 'apollo-link-error';

const httpLink = new HttpLink({
  uri: 'http://192.168.1.70:8888/graphql',
});

const handleErrors = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      console.log({ graphQLErrors });
      for (let err of graphQLErrors) {
        switch (true) {
          case err.code === 401 || err.message === 'UNAUTHENTICATED':
            break;
          default:
        }
      }
    }
    if (networkError) {
      console.log({networkError});
      // if you would also like to retry automatically on
      // network errors, we recommend that you use
      // apollo-link-retry
    }
    return forward(operation);
  }
);

const client = new ApolloClient({
  //Assign to your cache property a instance of a InMemoryCache
  cache: new InMemoryCache(),
  link: from([handleErrors, httpLink]),
  dataIdFromObject: r => r.id,
});

export default client;

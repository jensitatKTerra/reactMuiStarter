
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, split } from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { SubscriptionClient } from "subscriptions-transport-ws";


// HTTP Link
const httpLink = new HttpLink({
    uri: `http://localhost:8080/v1/graphql`,
  });
  
  // Adds Authentication Headers on HTTP as well as was requests
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": "myadminsecretkey",
      },
    };
  });
  
//   // WebSocket Link
//   const wsLink = new WebSocketLink({
//     uri: `ws://localhost:8080/v1/graphql`,
//     options: {
//       reconnect: true,
//       lazy: true,
//     },
//   });
const wsLink = new WebSocketLink(
    new SubscriptionClient(`ws://localhost:8080/v1/graphql`, {
        reconnect: true,
        timeout: 30000,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret": "myadminsecretkey",
            }
        }
    })
)
  
  // Send query request based on the type definition
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    authLink.concat(wsLink),
    authLink.concat(httpLink)
  );
  
  // Apollo Client
  export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

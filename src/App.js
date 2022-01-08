import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import Screen from "./app/app";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={ client }>
      <Screen/>
    </ApolloProvider>
  );
}

export default App;

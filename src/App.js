import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Screen from "./app/app";

const client = new ApolloClient({
  uri: 'https://covid-api-graphql.herokuapp.com/',
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

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = JSON.parse(localStorage.getItem('user'))

const client = new ApolloClient({
  uri: "https://hotelbooking-be.onrender.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: user ? `Bearer ${user.accessToken}` : ' ',
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);


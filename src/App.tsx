import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'

import Router from "./Router";

export default () => {
  return(
    <ApolloProvider client={client}>            
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  );
}
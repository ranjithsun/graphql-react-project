import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

//Components
import BookList from './components/BookList';
import AddAuthor from './components/AddAuthor';

//Setup Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
})

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <div className="pagetitle">
            <h2>Booklist app with GraphQL</h2>
          </div>     
          <BookList />
          <AddAuthor />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

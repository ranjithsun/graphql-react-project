import {gql} from 'apollo-boost';

const getBooksQuery = gql`
  {
    books{
      name
      genre
      id
      author{
        name
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`;

const addBooksQuery = gql`
  mutation AddBook($name: String!, $genre: String!, $authorid: ID!){
    addBook(name:$name, genre:$genre, authorid:$authorid){
      name
      genre
    }
  }
`;

const getBookDetailQuery = gql`
    query ($id: ID){
    book(id:$id){
        name
        genre
        id
        author{
            name
            books{
                name
            }
        }
    }
    }
`;

export { getBooksQuery, getAuthorsQuery, addBooksQuery, getBookDetailQuery};
import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';

import {getBooksQuery} from '../queries/queries';

//Components
import BookDetails from './BookDetail';

function BookList(){

  const { loading, error, data } = useQuery(getBooksQuery);
  const [selectedBookId, setSelectBookId] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  
  return (
    <div className="maincontent">
      <div className="booklist-container">
        <ul className="booklist">
          {data.books.map(book => (
          <li id={book.id} key={book.id} onClick={(e)=>{ setSelectBookId(book.id); }}>
            {book.name}
          </li>
          ))}
        </ul>
      </div>
      <BookDetails bookid={selectedBookId} />
    </div>
    );
}

export default BookList;
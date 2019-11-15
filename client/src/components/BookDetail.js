import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import {getBookDetailQuery} from '../queries/queries';

function BookDetail(props){
  const { data } = useQuery(getBookDetailQuery, {variables: {id:props.bookid}});  
  
  return (
        <div className="bookdetails-container" >
          {data ? (
            <div className="bookdetails">
                <div><p>Book Name: {data.book.name}</p></div>
                <div><p>Genre: {data.book.genre}</p></div>
                <div><p>Author Name: {data.book.author.name}</p></div>
            </div>
          ) : (
          <div className="bookdetails">
              <p>No Book Selected...</p>
          </div>
          )}
        </div>
    );
}

export default BookDetail;
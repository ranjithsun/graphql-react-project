import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import {getAuthorsQuery} from '../queries/queries';

function AuthorList(){

  const { loading, error, data } = useQuery(getAuthorsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  
  return (
        <select name="authors" className="authorlist" id="authorlist">
          {data.authors.map(author => (
          <option value={author.id} key={author.id}>
            {author.name}
          </option>
          ))}
        </select>
    );
}

export default AuthorList;
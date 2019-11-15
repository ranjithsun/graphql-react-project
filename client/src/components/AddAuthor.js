import React from 'react';
import {useMutation} from '@apollo/react-hooks';

import {getBooksQuery, addBooksQuery} from '../queries/queries';

import AuthorList from './AuthorList';

function AddAuthor(){

    const [addBook] = useMutation(addBooksQuery);

    const addNewBook = (e)=>{
        e.preventDefault();
        let bookname = document.getElementById("bookname").value;
        let genrename = document.getElementById("bookgenre").value;
        let authorid = document.getElementById("authorlist").value;
        addBook({
            variables: { 
                name: bookname, 
                genre: genrename,
                authorid: authorid
            },
            refetchQueries: [{ query: getBooksQuery }] 
        });
    }
    
    return (      
        <div className="addbookform-container">
            <form name="addbookform" onSubmit={addNewBook}>
                <div className="formfield-container">
                    <label>Book Name:</label>
                    <input type="text" name="bookname" id="bookname"></input>
                </div>
                <div className="formfield-container">
                    <label>Book Genre:</label>
                    <input type="text" name="bookgenre" id="bookgenre"></input>
                </div>
                <div className="formfield-container">
                    <label>Book Author:</label>
                    <AuthorList />
                </div>
                <div className="formfield-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddAuthor;
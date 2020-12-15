const express = require('express'); //import express library
const graphqlHTTP = require('express-graphql'); //import graphql
const schema = require('./schema/schema'); //import schema created
const mangoose = require('mongoose');
const cors = require('cors');

const app = express(); //setup express method as 'app'

app.use(cors());

mangoose.connect("mongodb+srv://ranjith:ranjith123@ranjith-graphql-ezzzw.mongodb.net/booklistapp");
mangoose.connection.once('open', ()=>{
    console.log('DB connected')
});

/* Setup a middleware of graphql that act as endpoint */
app.use('/graphql', graphqlHTTP({
    /* get imported schema */
    schema,
    graphiql: true
}));

/* listening to a port of its own */
app.listen('8080', ()=>{console.log("Now listening to port 8080")});
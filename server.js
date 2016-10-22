'use strict';

const express = require("express");
const app = new express();

const path = require('path');
app.use(express.static(path.join(__dirname + '/')));


app.listen(3000,()=>{
    console.log("server start on 3000");
});

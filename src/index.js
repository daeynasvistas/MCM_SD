import express from 'express';

const app = express();

app.listen(PORT, err => {
    if (err){
        throw err;
    } else {
        console.log(`
        Server running on port : ${PORT}
        ---------------------------------
        Runnning on ${process.env.NODE_ENV}
        ---------------------------------
        MCM 2018/19 - Sistemas Distribuidos
        `)
    }
})

import express from 'express';
import mongoose from 'mongoose';
import {MONGO_URI} from './config/keys.js';
import {questions} from './routes/questions.js';


const app = express();
app.use(express.json());

mongoose
    .connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`MongoDB Connected `))
            .catch(err => console.log(err))

app.use('/api/questions', questions);



// app.get('/', (req, res)=>{
//     res.send('hello world');
// });



const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`server is live on port ${port}`);
});

import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
dotenv.config();

let articleInfo = [{
  name: 'learn-react',
  upvote: 0
}, {
  name: 'learn-node',
  upvote: 0
}, {
  name: 'mongodb',
  upvote: 0
}]

const app = express();

//MiddleWare
app.use(express.json())
app.use(cookieParser);
app.use(express.urlencoded({ extended: false }));

app.put('/api/articles/:name/upvote', (req, res) => {
  const { name } = req.params;

  const article = articleInfo.find(a => a.name === name)
  if (article) {
    article.upvote += 1;
    return res.status(200).send(`The ${name} article now has ${article.upvote} upvotes`)
  } else {
    return res.status(404).send('Article not found')
  }
})

app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params
  const { postedBy, text } = req.body

  const article = articleInfo.find(a => a.name === name)
  article.comments.push({
    postedBy,
    text
  })
})

const PORT = 8000;

//Database Connection
mongoose.connect(process.env.Mongo_Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
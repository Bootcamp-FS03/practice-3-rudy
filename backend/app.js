// server.mjs
import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import appRouter from './app.router.js';
import env from './environment.js'
import cors from 'cors'

const {SECRET_KEY, PORT} = env
const app = express();

app.use(cors({
  origin: "*"
}));

app.use(bodyParser.json());

app.use("/", appRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

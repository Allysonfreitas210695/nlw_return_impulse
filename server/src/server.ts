import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();
const PORT_URL = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT_URL, () => {
  console.log('Rodando o node!')
})

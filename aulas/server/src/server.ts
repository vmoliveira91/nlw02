import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(3000);

// Corpo (request body): dados p/criação ou atualização request.body
// Route Params: identificar qual recurso quero atualizar ou deletar request.params
// :id
// Query Params: paginação, filtro, ordenação request.query
// ?page=2&sort=name
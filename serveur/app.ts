import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;


app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/login/login.html'));
  res.sendFile(path.join(__dirname, '../client/login/login.css'));
  res.sendFile(path.join(__dirname, '../client/login/login.js'));
});


app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
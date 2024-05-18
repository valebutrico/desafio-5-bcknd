import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import { connectMongoDB } from './config/mongoDb.config.js';

connectMongoDB();

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(8080, () => {
  console.log('Escuchando el servidor en el puerto 8080');
});

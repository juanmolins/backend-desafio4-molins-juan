import express from 'express';
import handlebars from 'express-handlebars';
import http from 'http';
import __dirname from './utils.js';
import { viewRouter, food } from './routes/view.router.js';
import { Server } from 'socket.io';

const port = 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.engine('handlebars', handlebars.engine());

app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', viewRouter);

io.on('connection', (socket) => {
    console.log('Usuario conectado');

    socket.emit('foodList', food);

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

app.listen(port, () => {
   console.log(`Servidor Express escuchando en el puerto ${port}`);
});
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.get('*', (req, res) => res.status(200).send({
    message: 'API funciona correctamente.'
}));

app.listen(port, () => {
    console.log(`El servidor se esta ejecutando en el puerto: ${port}`);
})

export default app;
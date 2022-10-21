import app from './app';

const port: number = 3000;

app.listen(port, ():void => console.log(`Listening on port ${port}!`));

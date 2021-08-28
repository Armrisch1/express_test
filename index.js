import express from "express";
import path from "path";

const PORT = process.env.PORT ?? 3000;
const DIRNAME = path.resolve();
const app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use(express.static(path.resolve(DIRNAME, 'public')));

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.get('/contacts', (req,res) => {
    res.sendFile(path.resolve(DIRNAME, 'public', 'contacts.html'));
});

app.get('/about', (req,res) => {
    res.sendFile(path.resolve(DIRNAME, 'public', 'about.html'));
});

app.get('/download', (req,res) => {
    res.download(path.resolve(DIRNAME, 'public/images','test.png'));
});


app.listen(PORT, function(){
    console.log('Server is run!');
});
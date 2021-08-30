export function setRoutes(app){

    app.set('view engine', 'ejs');
    app.set('views', 'templates');

    app.use(express.static(PATH.resolve(DIRNAME, 'public')));

    app.get('/', (req, res) => {
        res.render('index', {title : 'Home Page'});
    });

    app.get('/contacts', (req,res) => {
        res.render('contacts', {title : 'Contacts'});
    });

    app.get('/about', (req,res) => {
        res.render('contacts', {title : 'About'});
    });

    app.get('/download', (req,res) => {
        res.download(PATH.resolve(DIRNAME, 'public/images','test.png'));
    });

    // app.get('/about', (req,res) => {
    //     res.sendFile(path.resolve(DIRNAME, 'public', 'about.html'));
    // });
}
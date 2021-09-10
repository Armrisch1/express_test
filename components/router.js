const UserController = require('../controllers/UserController.js');
const HomeController = require('../controllers/HomeController.js');
const CabinetController = require('../controllers/CabinetController.js');

// Ejs config
app.set('view engine', 'ejs');
app.set('views', 'templates');

// Assets folder
app.use(express.static(PATH.resolve(DIRNAME, 'public')));

// Home Controller
app.get('/', HomeController.index);
app.get('/contacts', HomeController.contacts);
app.get('/about', HomeController.about);
app.get('/download', HomeController.download);

// User Controller
app.get('/register', UserController.register);
app.get('/login', UserController.login);

// Cabinet Controller
app.get('/cabinet', CabinetController.index);

// POST
app.post('/register', UserController.registerValidation, UserController.store);
app.post('/login', UserController.loginValidation, UserController.auth);


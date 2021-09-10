class HomeController {

    index (req, res){
        res.render('index', {title : 'Home Page'});
    };

    contacts (req, res){
        res.render('contacts', {title : 'Contacts'});
    };

    about (req, res){
        res.render('about', {title : 'About'});
    };

    download (req, res){
        res.download(PATH.resolve(DIRNAME, 'public/images','test.png'));
    }

}

module.exports = new HomeController;
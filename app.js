/* CSS
   Vi kommera att använda oss av Bootstrap:
   https://getbootstrap.com/

   Bootstrap är ett gratis CSS-ramverk med öppen källkod riktat mot 
   responsiv, mobil-först front-end webbutveckling. Den innehåller 
   HTML, CSS och JavaScript-baserade designmallar för typografi, 
   formulär, knappar, navigering och andra gränssnittskomponenter.


   Vi kommer att använda EJS
   https://ejs.co/
*/

const express = require('express');
const app = express();

const port = 3000;
//const port = process.env.PORT || 3000;

// Mallmotor
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Vad är Webbserverprogrammering?',
        description: 'Detta är en dynamisk beskriving från index.ejs filen',
    });
});

app.get('/nodejs', (req, res) => {
    res.render('nodejs', {
        title: 'Vad är Node.js?',
        description: 'Detta är en dynamisk beskriving från nodejs.ejs filen',
    });
});

app.get('/http', (req, res) => {
    res.render('http', {
        title: 'Vad är HTTP-modulen i Node.js?',
        description: 'Detta är en dynamisk beskriving från http.ejs filen',
    });
});

app.get('/express', (req, res) => {
    res.render('express', { 
        title: 'Vad är Express.js?',
        description: 'Detta är en dynamisk beskriving från express.ejs filen' 
    });
});

app.get('/ejs', (req, res) => {
    res.render('ejs', {
        title: 'Vad är EJS?',
        description: 'Detta är en dynamisk beskriving från ejs.ejs filen',
        text: '<%= %>',
    });
});

app.get('/hbs', (req, res) => {
    res.render('hbs', {
        title: 'Vad är HBS?',
        description: 'Detta är en dynamisk beskriving från hbs.ejs filen'
    });
});

app.get('/mongodb', (req, res) => {
    res.render('mongodb', {
        title: 'Vad är MongoDB?',
        description: 'Detta är en dynamisk beskriving från mongodb.ejs filen',
    });
});

app.get('/mongoose', (req, res) => {
    res.render('mongoose', {
        title: 'Vad är Mongoose?',
        description: 'Detta är en dynamisk beskriving från mongoose.ejs filen',
    });
});

app.get('/bodyparser', (req, res) => {
    res.render('bodyparser', {
        title: 'Vad är bodyParser?',
        description: 'Detta är en dynamisk beskriving från bodyparser.ejs filen',
    });
});

app.get('/jwt', (req, res) => {
    res.render('jwt', {
        title: 'Vad är JWT?',
        description: 'Detta är en dynamisk beskriving från jwt.ejs filen',
    });
});



app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404',
        subtitle: 'Filen hittades INTE',
        description: 'Webbplatsen som är konfigurerad på den här adressen innehåller inte den begärda filen.'
    });
});

app.listen(port, () => {
    console.log(`Exempel på app som lyssnar på port ${port} via EXPRESS.`);
})
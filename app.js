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
        title: 'Vad är Node.js?',
        description: 'Detta är en dynamisk beskriving från index.ejs filen',
    });
});

app.get('/service', (req, res) => {
    res.render('service', { 
        title: 'Vad är Express.js?',
        description: 'Detta är en dynamisk beskriving från service.ejs filen' 
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
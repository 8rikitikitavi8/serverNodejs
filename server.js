const express = require('express');
const hbs = require('express-handlebars');
const falseRouters = require('./routes/false');
const trueRoutes = require('./routes/true');
const startPageRoutes = require('./routes/startPage');

const app = express();
app.engine('hbs', hbs({
        defaultLayout: 'layout',
        extname: 'hbs'
    }
));
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use('/false',falseRouters);
app.use('/true',trueRoutes);
app.use('/',startPageRoutes);

const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log(`Server is running on port ${PORT}`);
});
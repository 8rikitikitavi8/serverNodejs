const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('true',{
        title: 'Администратор с таким именем присутствует',
    });
});
module.exports = router;
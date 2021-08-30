const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('false',{
        title: 'Такого администратора нет',
    });
});
module.exports = router;
const {Router} = require('express');
const router = Router();
const os = require('os');

router.get('/', (req, res) => {
    res.render('index',{
        title: 'Проверка администратора',
    });
});

router.post('/', (req, res) => {
    let formData = req.body.visitor;
    os.userInfo().username === formData ? res.redirect('/true') : res.redirect('/false');
    res.redirect(`/true`);
})
module.exports = router;
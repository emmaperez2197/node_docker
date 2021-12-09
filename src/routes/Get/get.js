const {Router}  = require('express');

const router = Router();

router.get('/emma', (req, res) => {
    res.json({message: 'hola word'})
})

module.exports = router;
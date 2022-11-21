const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    res.json(users)
});

module.exports = router;
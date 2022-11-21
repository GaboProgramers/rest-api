const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "gabriel",
        "website": "crypto.com"
    }

    res.json(data);
});

module.exports = router;
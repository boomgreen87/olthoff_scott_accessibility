const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    let query = "SELECT * FROM tbl_media";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // Render the home view with dynamic data
        res.render('home', { media: result });
    })
})

router.get('/media/:id', (req, res) => {
    let query = `SELECT * FROM tbl_media WHERE id="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result);

        // Render the view with dynamic data
        res.json(result[0]);
    })
})

module.exports = router;
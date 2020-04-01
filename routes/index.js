const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

// Default route
router.get('/', (req, res) => {
    let query = "SELECT * FROM tbl_media";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // Render the home view
        res.render('home', { media: result });
    })
})

// Selected media route
router.get('/media/:id', (req, res) => {
    let query = `SELECT * FROM tbl_media WHERE id="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // Render the view with dynamic data
        res.json(result[0]);
    })
})

module.exports = router;
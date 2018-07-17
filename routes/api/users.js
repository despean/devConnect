/**
 * Created by Administrator on 2018-07-16.
 */
const express = require('express')

const router = express.Router();

// @route GET api/users/test
// @desc   test users route
// @access  Public
router.get('/test', (req, res) =>
    res.json({"Msg": "despean"})
);

module.exports  = router;

/**
 * Created by Administrator on 2018-07-16.
 */
/**
 * Created by Administrator on 2018-07-16.
 */
const express = require('express')

const router = express.Router();

// @route GET api/post/test
// @desc   test post route
// @access  Public
router.get('/test', (req, res) =>
    res.json({"Msg": "post"})
);

module.exports  = router;

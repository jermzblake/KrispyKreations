const express = require('express');
const router = express.Router();
const recipeBooksCtrl = require('');
const helpers = require('../../config/helpers');

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.get('/', helpers.checkAuth, recipeBooksCtrl.index);
router.post('/', helpers.checkAuth, recipeBooksCtrl.create);

module.exports = router;
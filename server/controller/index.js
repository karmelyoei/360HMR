const router = require('express').Router();

const { addNewEmployee } = require('./employee');

router.post('/api/dashboard/newemployee', addNewEmployee);

router.get('/like', (req, res) => {
	res.send('hello from back');
});
module.exports = router;

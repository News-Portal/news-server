const router = require('express').Router()
const { jobsGit, searchJob } = require('../controllers/jogGitController')

router.get('/jobsgit', jobsGit)
router.post('/jobsgit', searchJob)

module.exports = router
const router = require('express').Router()
const { jobsGit, searchJob } = require('../controllers/jogGitController')

router.get('/', jobsGit)
router.post('/', searchJob)

module.exports = router
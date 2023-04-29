const studentController = require('../controller/Student.controller')


// router
const router = require('express').Router()





// use routers
router.post('/create', studentController.addStudent )

router.get('/', studentController.getAllStudent)

router.put('/post/:id',studentController.updateStudent)

router.delete('/:id',studentController.deleteStudent)











module.exports = router
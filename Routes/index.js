const express=require("express")
const createTask = require("../controler/createTask")
const fetchTasks = require("../controler/fetchTasks")
const updateTask = require("../controler/updateTask")
const deleteTask = require("../controler/deleteTask")
const { asyncError } = require("../middleware/error")
const router=express.Router()
router.post('/v1/create-task',asyncError(createTask))
router.get('/v1/fetch-tasks',asyncError(fetchTasks))
router.delete('/v1/delete-task/:id',asyncError(deleteTask))
router.put('/v1/update-task/:id',asyncError(updateTask))

module.exports=router
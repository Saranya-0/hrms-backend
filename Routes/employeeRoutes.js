const express = require('express');
const router = express.Router();
const {createEmployee, getAllEmployees,  getEmployeeById,updateEmployee,
  deleteEmployee}=require('../controllers/EmployeeController');

// CREATE an employee

router.post('/create',createEmployee);

// Get all employees
router.get('/get', getAllEmployees);

//get a specific employee by ID
router.get('/get/:id',getEmployeeById)

// Update an employee by ID
router.put('/employee/:id', updateEmployee);
// Delete an employee by ID
router.delete('/employee/:id', deleteEmployee);

module.exports=router;
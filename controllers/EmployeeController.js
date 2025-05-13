const Employee = require('../Models/EmpSchema');

// CREATE a new employee
exports.createEmployee = async (req, res) => {
  const { name, email, position, salary  } = req.body;
  try {
    const newEmployee = new Employee({ name, email, position, salary });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully', data: newEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error: error.message });
  }
};


// READ all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ message: 'Employees fetched successfully', data: employees });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error: error.message });
  }
};


// Get a specific employee by ID
exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE an employee by ID
exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email , position, salary} = req.body;
  try {
    const updated = await Employee.findByIdAndUpdate(id, { name, email, position, salary }, { new: true });
    if (!updated) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json({ message: 'Employee updated successfully', data: updated });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error: error.message });
  }
};

// DELETE an employee by ID
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Employee.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json({ message: 'Employee deleted successfully', data: deleted });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error: error.message });
  }
};
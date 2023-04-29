const db = require("../models/index.models")

// create main Model
const Student = db.student


// create employee

const addStudent = async (req, res) => {

  let info = {
    name: req.body.name,
    age: req.body.age,
    roleNo: req.body.roleNo,
    address: req.body.address
  }

  const data = await Student.create(info)
  res.status(200).send(data)
  console.log(data)

}

const getAllStudent = async (req, res) => {

  let data = await Student.findAll({})
  res.status(200).send(data)

}


const getOneStudent = async (req, res) => {

  let id = req.params.id
  let data = await Student.findOne({ where: { id: id } })
  res.status(200).send(data)

}

const updateStudent = async (req, res) => {


  const id = parseInt(req.params.id);
  try {
    const object = await Student.findByPk(id);
    if (object) {
      await Student.update(req.body, { where: { id: id } })
      let data = await Student.findOne({ where: { id: id } })
      res.status(200).send(data)
    } else {
      res.status(404).send('Object not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

}


//  delete employee by id

const deleteStudent = async (req, res) => {

  //let id = req.params.id
  const id = parseInt(req.params.id);
  try {
    const object = await Student.findByPk(id);
    if (object) {
      await object.destroy();
      res.status(200).send("Object deleted successfully");
    } else {
      res.status(404).send('Object not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

}



module.exports = {
  addStudent,
  getAllStudent,
  getOneStudent,
  deleteStudent,
  updateStudent
}

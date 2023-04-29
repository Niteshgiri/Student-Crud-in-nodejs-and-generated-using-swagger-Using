module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("student", {
      
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER
        },
        roleNo: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        }
    
    })

    return Student

}
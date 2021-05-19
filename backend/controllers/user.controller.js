
const Sequelize = require('sequelize'),
    { Usuario } = require('../models'),
    { Op } = Sequelize


const create = async (req, res) => {
    const {
        name,
        username,
        email,
        password,
        address,
        website,
        phone,
        company,
        about,
        photo
    } = req.body


    const user = await Usuario.create({
        name,
        username,
        email,
        password,
        address,
        website,
        phone,
        company,
        about,
        photo
    })

    if (user) {
        res.status(200).json({
            message: "Successfully signed up!"
        })
    } else {
        res.status(400).json({
            message: "algum error"
        })
    }
}

module.exports = {
    create
}

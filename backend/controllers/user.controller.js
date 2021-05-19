const { Usuarios } = require('../models/user.model')

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

    try {
        await Usuarios.create({
            name: name,
            username: username,
            email: email,
            password: password,
            address: address,
            website: website,
            phone: phone,
            company: company,
            about: about,
            photo: photo
        })
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (err) {
        return res.status(400).json({
            error: 'algum error'
        })
    }
}





module.exports = {
    create
}

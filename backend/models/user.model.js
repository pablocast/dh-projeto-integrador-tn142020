module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        user_id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        create_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        address: {
            type: DataTypes.STRING ,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING ,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING ,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING ,
            allowNull: false
        },
        about: {
            type: DataTypes.STRING ,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING ,
            allowNull: true
        }
    }, {
            tableName: 'usuarios',
            timestamps: false
    });

    return Usuario;   
}
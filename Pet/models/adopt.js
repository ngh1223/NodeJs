module.exports = function (sequelize, DataTypes) {
    let adopt = sequelize.define("adopt", {
        a_idx: {
            filed: "a_idx",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        a_number: {
            field: "a_number",
            type: DataTypes.STRING(50),
            allowNull: false
        },
        a_age: {
            field: "a_age",
            type: DataTypes.STRING(20),
            allowNull: false
        },
        a_sad: {
            field: "a_sad",
            type: DataTypes.STRING(200),
            allowNull: false
        },
        a_sn: {
            field: "a_sn",
            type: DataTypes.STRING(100),
            allowNull: false
        },
        a_tel: {
            field: "a_tel",
            type: DataTypes.STRING(100),
            allowNull: false
        },
        a_img: {
            field: "a_img",
            type: DataTypes.STRING(200),
            allowNull: false
        },
        a_date: {
            field: "a_date",
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        a_breed: {
            field: "a_breed",
            type: DataTypes.STRING(30),
            allowNull: false
        },
        a_status: {
            field: "a_status",
            type: DataTypes.STRING(30),
            allowNull: false
        },
        m_idx: {
            field: "m_idx",
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            underscored: true,
            freezeTableName: true,
            tableName: "adopt"
        });

    adopt.associate = function (models) {
        adopt.belongsTo(models.member, {
            foreignKey: "m_idx",
            onDelete: "cascade"
        })
    };

    return adopt;
}
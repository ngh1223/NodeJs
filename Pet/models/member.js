module.exports = function (sequelize, DataTypes) {
    let member = sequelize.define("member", {
        m_idx: {
            filed: "m_idx",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        m_id: {
            field: "m_id",
            type: DataTypes.STRING(20),
            allowNull: false
        },
        m_name: {
            field: "m_name",
            type: DataTypes.STRING(10),
            allowNull: false
        },
        m_pw: {
            field: "m_pw",
            type: DataTypes.STRING(20),
            allowNull: false
        },
        m_address: {
            field: "m_address",
            type: DataTypes.STRING(100),
            allowNull: false
        },
        m_date: {
            field: "m_date",
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        m_img: {
            field: "m_img",
            type: DataTypes.STRING(200),
            allowNull: true
        }
    },
        {
        underscored: true,
        freezeTableName: true,
            tableName: "member"
        });

    member.associate = function (models) {
        member.hasMany(models.adopt);
    };

    return member;
}
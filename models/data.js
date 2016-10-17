module.exports = function(sequelize, DataTypes) {
	return sequelize.define('data', {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 255]
			}
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 255]
			}
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 255]
			}
		},
		dateOfBirth: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 255]
			}
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 255]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 255]
			}
		},
		contact: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 255]
			}
		}
	});
};
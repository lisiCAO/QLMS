const { Model, DataTypes } = require("sequelize");

class oauth_token extends Model {}

  module.exports = (sequelize) => {
    oauth_token.init(
          {                
            token_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: DataTypes.INTEGER,
      access_token: DataTypes.TEXT,
      refresh_token: DataTypes.TEXT,
      expires_in: DataTypes.DATE,
      provider: DataTypes.STRING
    }, {
      sequelize,
      modelName: "oauth_token",
      tableName: "oauth_token",
      timestamps: false,
      underscored: true, // use snake_case instead of camelCase
    });
    return oauth_token;

  };
  
  oauth_token.associate = function (models) {
    oauth_token.belongsTo(models.user, {
          foreignKey: "oauth_provider_user_id",
      });
  };
  
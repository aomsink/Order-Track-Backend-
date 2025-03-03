module.exports = (sequelize, dataType) => {
  const User = sequelize.define("users", {
    id: {
      type: dataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    order_id: {
      type: dataType.STRING,
      allowNull: false,
    },
    status: {
      type: dataType.STRING,
      allowNull: false,
    },
    location: {
      type: dataType.STRING,
      allowNull: false,
    },
    
  });

  return User;
};

// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const ActiveAdminComments = sequelize.define('activeAdminComments', {
    namespace: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    resourceType: {
      type: DataTypes.STRING,
    },
    resourceId: {
      type: DataTypes.BIGINT,
    },
    authorType: {
      type: DataTypes.STRING,
    },
    authorId: {
      type: DataTypes.BIGINT,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'active_admin_comments',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  ActiveAdminComments.associate = (models) => {
  };

  return ActiveAdminComments;
};

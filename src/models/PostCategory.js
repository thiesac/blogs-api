module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'category',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
},
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostCategory;
};
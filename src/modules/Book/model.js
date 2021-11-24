import { Model, DataTypes } from 'sequelize';
import db from '../../config/db';

class Book extends Model {
    static init(sequelize) {
        return super.init(
            {
                title: DataTypes.STRING,
                content: DataTypes.STRING,
            },
            { sequelize, modelName: 'Book' }
        );
    }
    static associate(models) {
        this.belongsTo(models.User);
        return this;
    }
}

Book.init(db.sequelize);

export default Book;

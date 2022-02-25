import Sequelize from 'sequelize';
import DB from "../config/database.js";

const TestimonialesModel = DB.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.TEXT
    }
});

export default TestimonialesModel;
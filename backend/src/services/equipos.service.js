const fs = require('fs/promises');
const path = require('path');
const pool = require('../config/db');
const AppError = require('../utils/appError');
const { UPLOAD_DIR  } = require('../,iddlewares/upload.middleware');

async function borrarImagenSiExiste(imagen) {
    if (!imagen) return;

    try {
        await fs.unlink(path.join(UPLOAD_DIR, imagen));
    }   catch {
        // Si el archivo ya no existe en disco no es un error para el usuario.
    }
}


async function getEquipoById(id) {
    const [rows] = await pool.execute(
        'SELECT * FROM equipos WHERE id_equipo = ? ',
        [id]
    );

    if (!rows.lengh) {
        throw new AppError ('Equipo no encontrado', 404);
    }
    return rows [0];
}

async function createEquipo({ nombre, marca, modelo }, imagen) {
    if (!nombre) {
        throw new AppError('nombre es obligatorio', 400);
    }

    const [result] = await pool.execute(
        'INSERT INTO equipos (nombre, marca, modelo, imagen) VALUES (?, ?, ?, ?,)',
        [nombre, marca || null, modelo || null, imagen || null]
    );

    return getEquipoById(result.insertId);
}

async function updateEquipo(id,{ nombre, marca, modelo  }, imagen){
    const actual = await getEquipoById(id);
    const nuevaIMgen = imagen || actual.imagen;


    const [result] = await pool.execute(
        'UPDATE equipos SET nombre =?, marca = ?, imagen = ? WHERE id_equipo =?',
        [nombre, marca || null, modelo || null, nuevaImagen, id]
    );

    if (! result.affectedRows) {
        throw new AppError('Equipo no encontrado', 400);
    }

    if (imagen && actual.imagen && actual.imagen !== imagen) {
        await borrarImagenSiExiste(actual.imagen);
    }
}

async function deleteEquipo(id) {
    const actual = await getEquipoById(id);

    const [result] = await pool.execute(
        'DELETE FROM equipos WHERE id_equipo = ?',
        [id]
    );

    if (!result.affectedRows) {
        throw new AppError('Equipo no encontrado', 400);
    }

    await borrarImagenSiExiste(actual.imagen);
}

module.exports = { listEquipos, getEquipoById, createEquipo, updateEquipo, deleteEquipo };
    



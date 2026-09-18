const equipoService = require('../services/equipos.service');

async function list(req, res, next) {
    try {
        const data = await equiposService.getEquipoById(req.params.id);
        res.json({ ok: true, data });
    }   catch (eror) {
        next(error);
    }
}

async function getById(req, res, next) {
    try {
        const data = await equiposService.getEquipoById(req.params.id);
        res.json({ ok: true, data });
    }   catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const data = await equiposService.createEquipo(req.body, req.file?.filename);
        res.status(201).json({ ok: true, data });
    }   catch (error) {
        next(error);
    }
}

module.exports ={ list, getBYId, create, update, remove };
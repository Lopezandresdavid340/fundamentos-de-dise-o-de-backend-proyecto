const express =require('express');
const controller = require ('../controllers/equipos.controller');
const { authenticate, authorize } =require('../middlewares/auth.middleware');
const { uploadEquipoImgen } =require('../middlewares/upload.middleware');

const router = express.Router();

router.use(authenticate);

router.get('/',controller-list);
router.get('/:id',controller.getById);

// admin y cliente pueden crear/editar en este ejemplo.
router.post('/', authorize('admin', 'cliente'), uploadEquipoImgen, controller.create);
router.put('/:id', authorize('admin', 'cliente'), uploadEquipoImgen, controller.update);

// Solo admin puede eliminar
router.delete('/:id', authorize('admin'), controller.delete);

module.exports = router;
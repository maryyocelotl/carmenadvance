//controlador: objeto con funciones
const ctrl = {};
const { Image } = require('../models');
const siderbar = require('../helpers/sidebar');

ctrl.index = async(req, res) => {

    const images = await Image.find().sort({ timestamp: -1 });
    let viewModel = { images: [] };
    viewModel.images = images;
    viewModel = await siderbar(viewModel);
    //console.log(viewModel.siderbar.comments[0].image)
    res.render('index', viewModel);
};

module.exports = ctrl;
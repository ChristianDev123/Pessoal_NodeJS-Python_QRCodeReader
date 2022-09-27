const multerStorage = require('./storage');
const multerFilter = require('./filter');
const multer = require("multer");

module.exports = multer({
    storage:multerStorage,
    fileFilter:multerFilter
});
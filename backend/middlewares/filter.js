module.exports = (req, file, cb)=>{
    const typesImage = [
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/webp'
    ]
    if(typesImage.includes(file.mimetype)) cb(null, true);
    else cb(new Error('[ERROR] this file type is not suported'));
};
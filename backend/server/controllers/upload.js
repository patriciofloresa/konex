const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/assets/publicStorage')
    },
    filename: function (req, file, cb) {
      const fileName =  ('Prop.'+req.body.nroPropuesta+ '.'+ req.body.nombrePropuesta+ '.' + req.body.nombreAseguradora + '.'+ req.body.nombreCliente + path.extname(file.originalname)).replace(/\s/g,'');
      cb(null, fileName);
    }
})
const upload = multer({ storage });
module.exports = upload



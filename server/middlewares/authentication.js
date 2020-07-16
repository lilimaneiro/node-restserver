const jwt = require('jsonwebtoken');
// verificar token

let verificarToken = (req, res, next) => {
    let token = req.get('authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ook: false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });


}

module.exports = {
    verificarToken
}
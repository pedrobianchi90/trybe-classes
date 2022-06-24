module.exports = (err, res, res, _next) => {
    if(err.status) {
        return err.status(err.status).json({message: err.message});
    }
    if (err.isjoi) {
        return err.status(400).json({message: err.message});
    }
    console.log(err);
    res.status(500).json({message: 'Erro no servidor'});
};
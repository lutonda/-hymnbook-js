exports.index = function(req, res, next) {
    User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });
}
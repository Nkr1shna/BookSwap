const bookshelf = require('../config/bookshelf')
const bcrypt = require('bcrypt');

const User = bookshelf.Model.extend({
    tableName: 'user',
    verifyPassword: function (password, fn) {
        bcrypt.compare(password, this.get('password'), function (err, result) {
            fn(result)
        })
    }
},
    {
        create: function (data) {
            return this.forge(data).save()
        }
    })


module.exports = User

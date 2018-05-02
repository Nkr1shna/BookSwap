const bookshelf = require('../config/bookshelf')
bookshelf.plugin('registry')

const UserWishlist = bookshelf.Model.extend({
    tableName: 'userWishlist',
    user: function () {
        return this.belongsTo('User', 'username', 'username');
    },
    book: function () {
        return this.belongsTo('Book', 'ISBN', 'ISBN');
    }
},
    {
        create: function (data) {
            return this.forge(data).save()
        }
    }
)


module.exports = bookshelf.model('UserWishlist', UserWishlist);

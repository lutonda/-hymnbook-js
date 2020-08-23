module.exports = {

    development:'mongodb://dbUser:dbUserPassword@cluster0-shard-00-00-txvil.mongodb.net:27017,cluster0-shard-00-01-txvil.mongodb.net:27017,cluster0-shard-00-02-txvil.mongodb.net:27017/hymnbook_js?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    development_3: 'mongodb+srv://dbUser:dbUserPassword@cluster0-txvil.mongodb.net/hymnbook_js?retryWrites=true&w=majority',
    test_evennode: 'mongodb+srv://dbUser:dbUserPassword@cluster0-txvil.mongodb.net/hymnbook_js?retryWrites=true&w=majority',
    production: 'nonde'
}
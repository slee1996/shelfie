module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get('db')

        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch(console.error)
    },

    post: (req, res, next) => {
        const db = req.app.get('db')
        const {productname, price, productimage} = req.body

        db.create_product([productname, price, productimage])
            .then(() => res.sendStatus(200))
            .catch(console.error)
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(console.error)
    }
}

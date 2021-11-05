class BaseRepository {
    constructor({schema}) {
        this.schema = schema
    }

    async create(item) {
        return await this.schema.create(item)
    }

    async findOne(id) {
        return await this.schema.query({id: {eq: id}}).exec()
    }

    async findAll(query) {
        return await this.schema.scan(query).exec()
    }
}

module.exports = BaseRepository
const BaseService = require("./baseService");

class heroService extends BaseService {
    constructor({repository}) {
        super({
            repository
        })
    }
}

module.exports = heroService
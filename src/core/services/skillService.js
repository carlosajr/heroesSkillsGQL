const BaseService = require("./baseService");

class skillService extends BaseService {
    constructor({repository}) {
        super({
            repository
        })
    }
}

module.exports = skillService
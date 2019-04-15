'use strict'

const hello = async (_args) => {

    return {
        message: 'Hello world'
    }

}

const resolver = {
    Query: {
        hello
    }
}

module.exports = {
    resolver
}

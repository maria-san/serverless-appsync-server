'use strict'

const { merge } = require('lodash')
const scan = require('scan-dir-recursive/sync')

const getResolvers = () => {

    const resolvers = []

    scan(`${__dirname}/../resolvers`)
        .filter(file => file.endsWith('.resolver.js'))
        .forEach(file => {
            const { resolver } = require(file)
            resolvers.push(resolver)
        })

    return merge({}, ...resolvers)

}

module.exports = {
    getResolvers
}

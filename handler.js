'use strict'

const { isEmpty } = require('lodash')
const { getResolvers } = require('./src/core/resolvers')

exports.graphql = async (event) => {

    const resolvers = getResolvers()
    const { TypeName, FieldName, Arguments, Source } = event
    const typeResolver = resolvers[TypeName]
    const fieldResolver = typeResolver[FieldName]

    if (!typeResolver) {
        return new Error(`No resolvers found for type: '${TypeName}'`)
    }
    if (!fieldResolver) {
        return new Error(`No resolvers found for field: '${FieldName}' on type: '${TypeName}'`)
    }

    const result = fieldResolver((!isEmpty(Arguments) ? Arguments : Source))

    return result
}

'use strict'

const hi = async (args) => {

	const { name } = args
    
	return {
		message: `hi ${name}`
	}

}

const resolver = {
	Mutation: {
		hi
	}
}

module.exports = { 
	resolver
}

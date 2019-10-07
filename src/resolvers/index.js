const { Query:QueryUser, Mutation:MutationUser} = require('./UserReolvers');
const { Query:QueryProperty, Mutation:MutationProperty  } = require('./PropertyResolvers');
const { URLResolver, EmailAddressResolver } = require('graphql-scalars');


module.exports ={
    EmailAddress:EmailAddressResolver,
    URL:URLResolver,
    Query:{
        ...QueryUser, //split object,
        ...QueryProperty
    },
    Mutation:{
        ...MutationUser,
        ...MutationProperty
    }
};
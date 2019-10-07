const { getAllProperties, getSingleProperty } = require('../../services/PropertyService');


const getProperties = async() => {
    const posts =  await getAllProperties();
    return posts;
};

const getOneProperty = async(_,params) => {
    const post = await getSingleProperty(params.id);
    if(!post) throw new Error('Property not exist');
    return post;
};


module.exports = {
    getProperties,
    getOneProperty
};
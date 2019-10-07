const { Properties } = require('../models');

const getAllProperties = () => Properties.find({is_active:true}).populate('user');

const getSingleProperty = (id) => Properties.findOne({_id:id,is_active:true}).populate('user');

const createProperty = async(data) => { 
    const property  = await Properties.create(data);
    const populatedProperty = await getSingleProperty(property._id);
    return populatedProperty;
};

const updateProperty = (id,data,user) => Properties.findOneAndUpdate({_id:id,user},{...data},{new:true}).populate('user');

const deleteProperty = (id,user) => Properties.findOneAndUpdate({_id:id,is_active:true,user},{is_active:false});


module.exports = {
    createProperty,
    getAllProperties,
    getSingleProperty,
    updateProperty,
    deleteProperty
};
const { createProperty, updateProperty, deleteProperty } = require('../../services/PropertyService');
const storage = require('../../utils/storage');

const createNewProperty =  async(_,{data},{user}) => {
    data.user = user._id;
    if(data.cover){
        const { createReadStream }  = await data.cover;
        const stream = createReadStream();
        const image = await storage({ stream });
        data = {...data,cover:image.url};
    }
    const property = await createProperty(data);
    user.properties.push(property._id);
    user.save();
    return property;
};

const updateOneProperty =  async(_,{id,data},{user}) =>{
    if(data.cover){
        const { createReadStream }  = await data.cover;
        const stream = createReadStream();
        const image = await storage({ stream });
        console.log(image);
        data = {...data,cover:image.url};
    }
    const property = await updateProperty(id,data,user);
    if(!property) throw new Error('Property not exist');
    return property;
};

const deleteOneProperty = async(_,{id},{user}) => {
    const property = await deleteProperty(id,user);
    if(!property) throw new Error('Property not exist');
    return 'Property deleted';
};

module.exports =  {
    createNewProperty,
    updateOneProperty,
    deleteOneProperty
};
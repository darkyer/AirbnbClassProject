const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    direction:{
        type:String,
        required:true
    },
    descrption:{
        type:String,
        required:true
    },
    cover:{
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    is_active:{
        type:Boolean,
        default:true
    }
}, {timestamps:true});

module.exports = mongoose.model('properties',PropertySchema);
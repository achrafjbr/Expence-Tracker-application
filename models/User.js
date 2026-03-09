import mongoose from mongoose;

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    skills: {
        type:String,
        enum:["Java","C-sharp"]
    },
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/TaskMangerApi',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
},(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log('connneted');
    }
})


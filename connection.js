
const mongoose = require("mongoose");

​const connectToDB = (async () => mongoose.connect(process.env.MONGODB_URL,{
     useNewUrlParser: true,
     useFindAndModify: false, 
     useUnifiedTopology: true,
    }));

    module.exports = connectToDB;
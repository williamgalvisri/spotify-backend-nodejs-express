const mongoose = require('mongoose');
mongoose.Promise = global.Promise

export const connect = async (uri: string) => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    await mongoose.connect(uri, options)
}

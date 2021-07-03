import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/budgetbuddy', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('connected to db');
    });
}

export const truncate = async () => {
    if (mongoose.connection.readyState !== 0) {
      const { collections } = mongoose.connection;
  
      const promises = Object.keys(collections).map(collection =>
        mongoose.connection.collection(collection).deleteMany({})
      );
  
      await Promise.all(promises);
    }
  };

export const disconnect = async() => {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
      }
}
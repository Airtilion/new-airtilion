import mongoose from 'mongoose';

let isConnected = false;

const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  if (isConnected) {
    console.log('Already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'airtilion',
    });

    isConnected = true;
    console.log('DB connected');
  } catch (err) {
    console.error('DB connection error:', err);
  }
};

export default connectToDB
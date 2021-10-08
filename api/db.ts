import mongoose from 'mongoose';

export const startDB = async () => {
  return await mongoose.connect(
    'mongodb+srv://seneka13:7u7NL3ex_!g2jUT@store.8u2pb.mongodb.net/consult?retryWrites=true&w=majority'
  );
};

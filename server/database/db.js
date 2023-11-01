import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL =`mongodb://${username}:${password}@ac-kosmbbs-shard-00-00.zdb68c8.mongodb.net:27017,ac-kosmbbs-shard-00-01.zdb68c8.mongodb.net:27017,ac-kosmbbs-shard-00-02.zdb68c8.mongodb.net:27017/?ssl=true&replicaSet=atlas-2v4y5b-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL , { useUnifiedTopology: true, useNewURLParser: true})
        console.log('Database connected');
    } catch (error) {
        console.log('Error while connecting with the database ', error.mesage);

    }
}

export default Connection;

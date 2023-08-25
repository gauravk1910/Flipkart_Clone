import mongoose from "mongoose";

export const Connection = async (username, password) =>{
    const URL= `mongodb://${username}:${password}@ac-lp0vsb3-shard-00-00.dmwztj1.mongodb.net:27017,ac-lp0vsb3-shard-00-01.dmwztj1.mongodb.net:27017,ac-lp0vsb3-shard-00-02.dmwztj1.mongodb.net:27017/?ssl=true&replicaSet=atlas-vy7dbt-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch(error) {
        console.log(`Error while connecting with the database `, error.message);
    }
}


export default Connection;
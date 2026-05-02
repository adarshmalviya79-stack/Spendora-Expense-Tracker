
const redis=require("redis")

const redisClient=redis.createClient({
     username: 'default',
    password:  process.env.REDIS_PASSWORD,
    socket: {
        host: 'redis-10413.crce281.ap-south-1-3.ec2.cloud.redislabs.com',
        port: 10413
    }
}); 

 
module.exports=redisClient;
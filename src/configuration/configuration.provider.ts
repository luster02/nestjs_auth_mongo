export default () => ({
    PORT: parseInt(process.env.PORT),
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET
})
import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-rate-limit"); //if 100 request per limit is reached, everyoen willbe blocked from the website.
        //rate limit per user if userid used. 

        if (!success) {
            return res.status(429).json({
                message: "Too mny request, please try again"
            })
        }
        next();

    } catch (error) {
        console.log("rate limit error ", error);
        next(error)
    }
}

export default rateLimiter;
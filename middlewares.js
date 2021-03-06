const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    if(process.env.NODE_ENV === 'production') {
        res.json({
            message: error.message,
        });
    }else{
        res.json({
            message: error.message,
            erorr: error.stack,
        });
    }
};

const cacheControl = (req, res, next) => {
    if (req.method == 'GET') {
        res.set('Cache-control', 'public, max-age=60, s-maxage=60');
    } else {
        res.set('Cache-control', `no-store`)
    }
}

module.exports = {
    notFound,
    errorHandler,
    cacheControl
};

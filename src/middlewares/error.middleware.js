const errorHandler = (err, res , message) => {
    const statusCode = err.statusCode || 500;
   return res.status(statusCode).json({
        success: false,
        message: message || err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
};

export { errorHandler };
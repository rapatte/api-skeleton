const errorHandler = (error, request, response, next) => {
    const { errors } = error;
    let { status, message, description } = error;

    if (!status) {
        status = 500;
        message = 'Oups ! Le serveur a un problème !';
        description =
            'Le serveur rencontre un problème technique. Veuillez réessayer plus tard.';
    }

    if (error.name === 'ValidationError') {
        response.status(status).json({
            message,
            errors,
        });
    } else {
        response.status(status).json({
            message,
            description,
        });
    }
};

export default errorHandler;

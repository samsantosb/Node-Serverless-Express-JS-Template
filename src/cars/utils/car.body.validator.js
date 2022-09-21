function invalidBody(body) {
    const car = {
        model: body.model,
        year: body.year,
        price: body.price,
        color: body.color,
    };

    const jsonCar = JSON.stringify(car);
    const jsonBody = JSON.stringify(body);

    if (jsonCar !== jsonBody) {
        return true;
    }
    return false;
}

module.exports = { invalidBody };
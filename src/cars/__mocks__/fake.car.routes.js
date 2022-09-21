const mockRequest = () => {
    const req = {
        apiGateway: {
            event: {
                body: null,
            },
        },
        params: null,
        query: null,
    };
    req.apiGateway.event.body = JSON.stringify(jest.fn().mockReturnValue(req));
    req.params = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);
    return req;
};
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

module.exports = { mockRequest, mockResponse };
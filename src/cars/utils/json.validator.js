function isJson(obj) {
    try {
        JSON.parse(obj);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports = { isJson };
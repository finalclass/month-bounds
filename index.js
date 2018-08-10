exports.getMonthBounds = function (timestamp) {
    var d = new Date(timestamp);
    return [
        Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1, 0, 0, 0, 0),
        Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1, 0, 0, 0) - 1
    ];
};

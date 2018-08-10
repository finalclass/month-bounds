const { getMonthBounds } = require('../index');
const should = require('should');

describe('reportsManager', () => {
    it('beginning of month', () => {
        const [beg] = getMonthBounds(Date.UTC(2018, 7, 9, 17, 13, 5, 240));
        should(beg).be.eql(Date.UTC(2018, 7, 1, 0, 0, 0, 0));
    });

    it('end of month', () => {
        const [_, end] = getMonthBounds(Date.UTC(2018, 7, 9, 17, 13, 5, 240));
        should(end).be.eql(Date.UTC(2018, 7, 31, 23, 59, 59, 999));
    });

    it('end of month edge case', () => {
        const [_, end] = getMonthBounds(Date.UTC(2018, 11, 31, 12, 59, 20, 200));
        should(new Date(end).toUTCString()).be.eql(
            new Date(Date.UTC(2018, 11, 31, 23, 59, 59, 999)).toUTCString()
        );
    });
});

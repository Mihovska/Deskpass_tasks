const { removeQuotes } = require('./stripQuotes');

describe('removing quotes',function () {
    it('should remove double quotes from a string', function () {
        const testQuote = `Hello there, it's me`;
        const result = removeQuotes(`"${testQuote}"`);

        expect(result).toMatch(testQuote);
    });

    it('should remove single quotes from a string', function () {
        const testQuote = `Hello there, it's me`;
        const result = removeQuotes(`'${testQuote}'`);

        expect(result).toMatch(testQuote);
    });

    it('should remove single and double angle quotes from a string', function () {
        const testQuote = `Time is the longest distance between two places.`;
        const result = removeQuotes(`‹«${testQuote}»›`);

        expect(result).toMatch(testQuote);
    });

    it('should remove comma quotation marks from a string', function () {
        const testQuote = `Time is the longest distance between two places.`;
        const result = removeQuotes(`“${testQuote}”`);

        expect(result).toMatch(testQuote);
    });

    it('should not remove apostrophe from a string', function () {
        let testQuote = `The student’s book was missing.`;
        let result = removeQuotes(`’${testQuote}’`);
        expect(result).toMatch(testQuote);

        testQuote = `Several students’ books were missing.`;
        result = removeQuotes(`’${testQuote}’`);
        expect(result).toMatch(testQuote);

        testQuote = `The student's book was missing.`;
        result = removeQuotes(`'${testQuote}'`);
        expect(result).toMatch(testQuote);

        testQuote = `Several students' books were missing.`;
        result = removeQuotes(`'${testQuote}'`);
        expect(result).toMatch(testQuote);
    });
});

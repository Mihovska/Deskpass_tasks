
/**
 * Remove all quotes from a string.
 * @param str - The string to remove quotes from.
 * @returns the string with all the quotes removed,
 * and preserve the apostrophes if found.
 */
function removeQuotes(str) {
    str = str.replace(/['](?=\w\s-'|$)|(?<=\W|^)[']/g, ''); // removes single quotation marks, but keeps the apostrophe
    str = str.replace(/'’'(?=\w\s-’|\W\s-’|$)/g, '');
    return str.replace(/["‘“”‹›«»„]/g, '');
}

module.exports = { removeQuotes };
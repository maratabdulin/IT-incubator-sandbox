function whatNumberIsIt (n) {
    if (n === Number.MAX_VALUE) {
        return 'Input number is Number.MAX_VALUE';
    }
    ;
    if (n === Number.MIN_VALUE) {
        return 'Input number is Number.MIN_VALUE';
    }
    if (isNaN (n)) {
        return 'Input number is Number.NaN';
    }
    ;
    if (n === -Infinity) {
        return 'Input number is Number.NEGATIVE_INFINITY';
    }
    ;
    if (n === Infinity) {
        return 'Input number is Number.POSITIVE_INFINITY';
    }
    ;

    return `Input number is ${n}`
}

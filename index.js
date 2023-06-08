function disemvowel(str) {
    let res = ''

    for (let i = 0; i < str.length; i++) {
        if (!'aeiou'.includes(str[i].toLowerCase())) {
            res += str[i]
        }
    }
    return res;
}
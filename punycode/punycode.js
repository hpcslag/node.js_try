var punycode = require('punycode');
// decode domain name parts
console.log(punycode.decode('maana-pta')); // 'mañana'
console.log(punycode.decode('--dqo34k')); // '☃-⌘'

console.log(punycode.encode('mañana')); // 'maana-pta'
console.log(punycode.encode('☃-⌘')); // '--dqo34k'

console.log(punycode.toUnicode('xn--maana-pta.com')); // 'mañana.com'
console.log(punycode.toUnicode('xn----dqo34k.com')); // '☃-⌘.com'

console.log(punycode.toASCII('mañana.com')); // 'xn--maana-pta.com'
console.log(punycode.toASCII('☃-⌘.com')); // 'xn----dqo34k.com'

console.log(punycode.ucs2.decode('abc')); // [97, 98, 99]
// surrogate pair for U+1D306 tetragram for centre:
console.log(punycode.ucs2.decode('\uD834\uDF06')); // [0x1D306]

console.log(punycode.ucs2.encode([97, 98, 99])); // 'abc'
console.log(punycode.ucs2.encode([0x1D306])); // '\uD834\uDF06'
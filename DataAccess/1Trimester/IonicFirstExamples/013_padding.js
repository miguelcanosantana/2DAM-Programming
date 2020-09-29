// Cadena de texto, cuánto espacio rellena, con qué caracter rellena (Si no hay nada se rellena con espacios)
console.log("abc".padStart(4, "*"));
console.log("abc".padStart(10));
console.log("abc".padStart(20, "-"));

console.log("abc".padEnd(4, "*"));
console.log("abc".padEnd(10)); //No son visibles pero están
console.log("abc".padEnd(20, "-"));
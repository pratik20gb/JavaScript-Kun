let message = "This";

// repeated 'let' leads to an error
// let message = "That"; // SyntaxError: 'message' has already been declared

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

// alert($ + _); // 3


// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

// For example: let, class, return, and function are reserved.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.
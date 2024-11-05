console.log("starting 5th November");
alert("Day01");
// understanding semicolon needs
alert("Hello");

[1, 2].forEach(alert);
//error
alert("Hello")[(1, 2)].forEach(alert);
// this is treated as alert("Hello")[1, 2].forEach(alert);

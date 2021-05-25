// Type Assertions

let message = "abc";
let endWithC = message.endsWith("c");

// another way of type Assertions when type is any
let message2;
message2 = "abc";
let endWIthC2 = (<string>message2).endsWith("c");

// Alternative way
let alternativeWay = (message2 as string).endsWith("c");

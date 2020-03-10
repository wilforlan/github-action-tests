require("@babel/polyfill/noConflict");
require('@babel/register')({
    presets: ['@babel/preset-env']
});

const hello = "HELLO";
name = "John Doe";
file = "something";

console.log({ hello, name, user, file, anon });
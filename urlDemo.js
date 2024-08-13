import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

//URL Object

const urlObj = new URL(urlString);
// console.log(urlObj);

console.log(url.format(urlObj));

const params = new URLSearchParams(urlObj.search);
console.log(params);

params.append("limit", "5");

console.log("params: ", params);

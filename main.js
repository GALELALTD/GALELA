
{
let paramsString = "name=foo&age=1337"
let searchParams = new URLSearchParams(paramsString);

searchParams.has("name") === true; // true
searchParams.get("age") === "1337"; // true
}
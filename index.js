const wco = require("wco");
const rl = require("readline").createInterface({input: process.stdin});
async function f() {
for await (const line of rl) {
    const {rpageid, rtext, rpagetitle} = JSON.parse(line);
    const text = rtext === null ? "" : rtext;
    const allCoords = wco(text);
    if (allCoords.length > 0) {
        const prioritizedCoords = wco(text, true).concat(allCoords)[0]; // get one coordinate, and prefer coordinates marked as relating to the article itself
        console.log(JSON.stringify({id: rpageid, title: rpagetitle, lng: prioritizedCoords[0], lat: prioritizedCoords[1]}));
    }
}
}
f()

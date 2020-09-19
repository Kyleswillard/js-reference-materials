//Landscape or Portrait
let picture = isLandscape(20, 20);
console.log(picture)

function isLandscape (width, height) {
return (width > height) ? true : false;

}
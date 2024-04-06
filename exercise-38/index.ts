interface album {
    artist : string,
    title : string,
    tracks? : number
}

function make_album(artist : string , title : string , tracks ? : number):object{
    let album : album = {artist ,title};
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album}
let album1 = (make_album(" ALI SETHI","Dastan ",8 ))
let album2 = (make_album("  Qawwali brother","Pheli si Mohabbat",10))
let album3 = (make_album(" FARHAN SAEED","Tabeer"))

console.log(album1);
console.log(album2);
console.log(album3);


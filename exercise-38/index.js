"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = (make_album(" ALI SETHI", "Dastan ", 8));
let album2 = (make_album(" by Qawwali brother", "Pheli si Mohabbat", 10));
let album3 = (make_album(" FARHAN SAEED", "Tabeer"));
console.log(album1);
console.log(album2);
console.log(album3);

"use strict";

const path = require("path");

const varastoTiedosto = path.join(__dirname, "huoneet.json");
const tekstiTiedosto = path.join(__dirname, "huoneTiedot.json");

const { lueTiedosto } = require("../kirjasto/tiedostokasittelija.js");

async function haeYksiHuone(huoneNro) {
    const data = await lueTiedosto(varastoTiedosto);
    return data.huoneet.find(olio => olio.huoneNro == huoneNro);
}

async function haeHuoneTekstit() {
    return await lueTiedosto(tekstiTiedosto);
}

module.exports = { haeYksiHuone, haeHuoneTekstit };
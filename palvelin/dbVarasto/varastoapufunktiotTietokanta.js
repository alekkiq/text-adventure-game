"use strict";

const path = require("path");

const varastoTiedosto = path.join(__dirname, "huoneet.json");
const tekstiTiedosto = path.join(__dirname, "huoneTiedot.json");

const Tietovarasto = require("./tietovarastokerros");
const varasto = new Tietovarasto();

async function haeYksiHuone(huoneNro) {
    const data = await varasto.haeHuone(huoneNro);
    return data.huoneet.find(olio => olio.huoneNro == huoneNro);
}

async function haeHuoneTekstit() {
    return await varasto.haeTekstit();
}

module.exports = { haeYksiHuone, haeHuoneTekstit };
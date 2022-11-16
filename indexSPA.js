"use strict";

const http = require("http");
const path = require("path");

const express = require("express");

const app = express();

const { port, host } = require("./config.json");

const { haeYksiHuone, haeHuoneTekstit } = require("./palvelin/jsonVarasto/varastoapufunktiot");

const indexPolku = path.join(__dirname, "index.html");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.sendFile(indexPolku));

// Yksi huone
app.get("/huoneet/:huoneNro", async (req, res) => {
    try {
        const numero = +req.params.huoneNro;
        const huone = await haeYksiHuone(numero);
        res.json(huone);
    }
    catch (virhe) {
        res.json({ virhe: virhe.message });
    }
});

// Lisätekstit
app.get("/tekstit", async (req, res) => {
    try {
        const tekstit = await haeHuoneTekstit();
        //console.log(tekstit.pelaajanAlkuHP)
        res.json(tekstit);
    }
    catch (virhe) {
        res.json({ virhe: virhe.message });
    }
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee`));
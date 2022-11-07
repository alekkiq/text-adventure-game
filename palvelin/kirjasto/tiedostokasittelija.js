"use strict";

const fs = require("fs").promises;

async function lueTiedosto(tiedosto) {
    try {
        const data = await fs.readFile(tiedosto, "utf-8");
        return JSON.parse(data);
    }
    catch (virhe) {
        return virhe;
    }
}

module.exports = { lueTiedosto };
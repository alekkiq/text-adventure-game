"use strict";

const Tietokanta = require("./tietokanta");

const { STATUSKOODIT, STATUSVIESTIT } = require("./statuskoodit");

const optiot = require("./sqlConfig.json");

const sql = require("./selectLauseet.json");

const haeTekstitSQL = sql.haeTekstit.join(" ");
const haeHuoneSQL = sql.haeHuone.join(" ");

const PERUSAVAIN = sql.perusavain;

module.exports = class Tietovarasto {
    constructor() {
        this.db = new Tietokanta(optiot);
    }
    get STATUSKOODIT() {
        return STATUSKOODIT;
    };

    haeTekstit() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.sqlKysely(haeTekstitSQL);
                resolve(tulos.kyselytulos)
            }
            catch (err) {
                reject(STATUSVIESTIT.OHJELMAVIRHE());
            }
        })
    }

    haeHuone(numero) {
        return new Promise(async (resolve, reject) => {
            if (!numero) {
                reject(STATUSVIESTIT.EI_LOYTYNYT("tyhjä"));
            }
            else {
                try {
                    const tulos = await this.db.sqlKysely(haeHuoneSQL, [numero]);
                    if (tulos.kyselytulos.length > 0) {
                        resolve(tulos.kyselytulos[0]);
                    }
                    else {
                        reject(STATUSVIESTIT.EI_LOYTYNYT(numero));
                    }
                }
                catch (err) {
                    reject(STATUSVIESTIT.OHJELMAVIRHE());
                }
            }
        });
    }
}
"use strict";

/* peli.js  IH 2017*/

/*class Huonevarasto {
    constructor(taso) {
        this.taso = taso;
        this.huoneKartta = new Map();

        for (let huone of this.taso.huoneet) {
            this.huoneKartta.set(huone.huoneNro, huone);
        }
    }
    haeHuone(nro) {
        return this.huoneKartta.get(nro);
    }
}*/

class Pelaaja {
    constructor(alkuHP) {
        this.pisteet = 0;
        this.hp = alkuHP;
        this.avaintasku = new Map();
        this.esinereppu = [];
        this.kaukolippu = [];
    }
}

class Peli {
    constructor(TASO) {
        this.pelaaja = new Pelaaja(TASO.pelaajanAlkuHP);
        this.peliLoppu = false;
        //this.huonevarasto = new Huonevarasto(TASO);
        this.aktiivinenHuone = TASO.pelinAloitushuoneenNro;
        this.edellinenSuunta = null;
    }
    get tekijat() {
        return this.tekijät.join(', ');
    }
    get voittoTeksti() {
        return TASO.tekstit.voitto;
    }
    get tappioteksti() {
        return TASO.tekstit.tappio;
    }
    get pohjoinen() {
        return this.aktiivinenHuone.pohjoinen;
    }
    get ita() {
        return this.aktiivinenHuone.ita;
    }
    get etela() {
        return this.aktiivinenHuone.etela;
    }
    get lansi() {
        return this.aktiivinenHuone.lansi;
    }
    static get SUUNTA() {
        return {
            POHJOINEN: 1,
            ITA: 2,
            ETELA: 3,
            LANSI: 4
        };
    }

    async siirryHuoneeseen(suunta) {
        switch (suunta) {
            case Peli.SUUNTA.POHJOINEN:
                if (this.aktiivinenHuone.pohjoinen !== null) {
                    const data = await fetch(`/huoneet/${this.aktiivinenHuone.pohjoinen.huoneeseen}`);
                    this.aktiivinenHuone = await data.json();
                    this.edellinenSuunta = Peli.SUUNTA.ETELA;
                }

                break;
            case Peli.SUUNTA.ITA:
                if (this.aktiivinenHuone.ita !== null) {
                    const data = await fetch(`/huoneet/${this.aktiivinenHuone.ita.huoneeseen}`);
                    this.aktiivinenHuone = await data.json();
                    this.edellinenSuunta = Peli.SUUNTA.LANSI;
                }

                break;
            case Peli.SUUNTA.ETELA:
                if (this.aktiivinenHuone.etela !== null) {
                    const data = await fetch(`/huoneet/${this.aktiivinenHuone.etela.huoneeseen}`);
                    this.aktiivinenHuone = await data.json();
                    this.edellinenSuunta = Peli.SUUNTA.POHJOINEN;
                }

                break;
            case Peli.SUUNTA.LANSI:
                if (this.aktiivinenHuone.lansi !== null) {
                    const data = await fetch(`/huoneet/${this.aktiivinenHuone.lansi.huoneeseen}`);
                    this.aktiivinenHuone = await data.json();
                    this.edellinenSuunta = Peli.SUUNTA.ITA;
                }
            default:
                this.edellinenSuunta = null;
        }
        this.paivitahuoneHp();
    }

    paivitahuoneHp() {
        if (this.aktiivinenHuone.huonehp !== null) {
            this.paivitaHp(this.aktiivinenHuone.huonehp.hp);
            this.aktiivinenHuone.huonehp.toistoLkm--;
        }
    }

    haeHuoneenTiedot() {
        if (this.aktiivinenHuone == null) { //tarkoituksella ==
            throw new Error(TASO.tekstit.kohtalokasVirhe);
        }
        if (this.peliLoppu) {
            return this.pelaajanTappio ? TASO.tekstit.tappio : TASO.tekstit.voitto;
        }
        return this.aktiivinenHuone.huoneteksti + this.haeLisatekstit();
    }

    haeLisatekstit() {
        if (this.aktiivinenHuone == null) { //tarkoituksella ==
            throw new Error(TASO.tekstit.kohtalokasVirhe);
        }
        let teksti = '';
        if (this.aktiivinenHuone.huonehp !== null) {
            if (this.aktiivinenHuone.huonehp.toistoLkm < 0) {
                teksti += ' ' + this.aktiivinenHuone.huonehp.tekstit.loppu;
                this.aktiivinenHuone.huonehp = null;
            }
            else {
                teksti += ' ' + this.aktiivinenHuone.huonehp.tekstit.vaikutus;
            }
        }
        if (this.aktiivinenHuone.vastustaja !== null) {
            teksti += ' ' + this.aktiivinenHuone.vastustaja.teksti;
        }
        if (this.aktiivinenHuone.avain !== null) {
            teksti += ' ' + this.aktiivinenHuone.avain.teksti;
        }
        if (this.aktiivinenHuone.esine !== null) {
            teksti += ' ' + this.aktiivinenHuone.esine.teksti;
        }
        return teksti;
    }

    get vastustajaTeksti() {
        return `${TASO.tekstit.kohtaaVastustaja} ${this.aktiivinenHuone.vastustaja.nimi} (HP${this.aktiivinenHuone.vastustaja.hp})`;
    }
    get avainTeksti() {
        if (this.aktiivinenHuone.avain.numero === 2) {
            return `${TASO.tekstit.kasaaKaukolippu} ${this.aktiivinenHuone.avain.nimi}`;
        }
        else {
            return `${TASO.tekstit.otaResurssi} ${this.aktiivinenHuone.avain.nimi}`;
        }
    }
    get esineTeksti() {
        return `${TASO.tekstit.otaResurssi} ${this.aktiivinenHuone.esine.nimi}`;
    }
    get huoneessaOnVastustaja() {
        return this.aktiivinenHuone.vastustaja !== null;
    }
    get huoneessaOnAvain() {
        return this.aktiivinenHuone.avain !== null;
    }
    get huoneessaOnEsine() {
        return this.aktiivinenHuone.esine !== null;
    }

    tarkastaAvain() {
        this.paivitaPisteet(this.aktiivinenHuone.avain.pisteet);
        this.paivitaHp(this.aktiivinenHuone.avain.hp);
        this.pelaaja.avaintasku.set(this.aktiivinenHuone.avain.numero, this.aktiivinenHuone.avain.nimi);
        let viesti = this.aktiivinenHuone.avain.vaikutus;
        this.aktiivinenHuone.avain = null;
        return viesti + " " + this.haeLisatekstit();
    }

    tarkastaKaukolippu() {
        if (this.pelaaja.kaukolippu.length === 4) {
            const kokonainenKaukolippu = {
                "nimi": "Kaukolippu",
                "numero": 2,
                "teksti": "Löysit kaikki kaukolipun palaset! Teippaat palaset yhteen ja lopputuloksena on kokonainen kaukolippu!",
                "vaikutus": "Palaa steissille voittaaksesi pelin!",
                "pisteet": 10,
                "hp": 0
            }
            this.aktiivinenHuone.avain = kokonainenKaukolippu;
        }
    }

    kamppaile() {
        let voittoRaja =
            Math.max((this.pelaaja.hp - this.aktiivinenHuone.vastustaja.hp + 50),
                this.aktiivinenHuone.vastustaja.voittoraja) / 100;
        let tulos = Math.random();
        if (tulos < voittoRaja) {
            //pelaajan voitto
            this.paivitaHp(this.aktiivinenHuone.vastustaja.hp);
            this.paivitaPisteet(this.aktiivinenHuone.vastustaja.pisteet);
            let viesti = this.aktiivinenHuone.vastustaja.voittoviesti;
            this.aktiivinenHuone.vastustaja = null;
            return viesti + " " + this.haeLisatekstit();
        } else {
            //pelaajan tappio
            this.paivitaHp(-this.aktiivinenHuone.vastustaja.hp / 2);
            return this.aktiivinenHuone.vastustaja.tappioviesti;
        }
    }

    tarkastaEsine() {
        this.paivitaPisteet(this.aktiivinenHuone.esine.pisteet);
        this.paivitaHp(this.aktiivinenHuone.esine.hp);
        if (this.aktiivinenHuone.esine.nimi.includes("Kaukolippu ")) {
            this.pelaaja.kaukolippu.push(this.aktiivinenHuone.esine.nimi);
        }
        this.tarkastaKaukolippu();
        let viesti = this.aktiivinenHuone.esine.vaikutus;
        this.aktiivinenHuone.esine = null;
        if (this.aktiivinenHuone.huoneNro === TASO.pelinLoppuhuoneenNro) {
            this.peliLoppu = true;
        }
        return viesti + " " + this.haeLisatekstit();
    }

    paivitaPisteet(lisays) {
        this.pelaaja.pisteet += Math.abs(lisays);
        if (this.pelaaja.pisteet % TASO.pisterajaYhdelleHplle)
            this.paivitaHp(1);
    }

    paivitaHp(muutos) {
        this.pelaaja.hp += muutos;
        if (this.pelaaja.hp > TASO.pelaajanMaksimiHP) {
            this.pelaaja.hp = TASO.pelaajanMaksimiHP;
        } else if (this.pelaaja.hp <= 0) {
            this.pelaaja.hp = 0;
        }
        if (this.pelaajanTappio) {
            this.peliLoppu = true;
        }
    }

    get pelaajanTappio() {
        return this.pelaaja.hp <= 0;
    }

    onAvainOveen(ovi) {
        return this.pelaaja.avaintasku.has(ovi.avain);
    }
}
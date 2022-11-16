/* taso.js */

const TASO11 = {
    "tekijät": ["Aleksi Putkonen", "Hannes Pallari", "Reino Anipuro"],
    "pelaajanAlkuHP": 30,
    "pelaajanMaksimiHP": 100,
    "pisterajaYhdelleHplle": 50,
    "pelinAloitushuoneenNro": 1,
    "pelinLoppuhuoneenNro": 1,
    "tekstit": {
        "pohjoinen": "Pohjoinen",
        "ita": "Itä",
        "etela": "Etelä",
        "lansi": "Länsi",
        "pisteotsikko": "Pisteet:",
        "hpotsikko": "HP:",
        "uusiNappi": "Aloita uusi peli",
        "voitto": "Löysit kaikki kaukolipun palaset ja palasit ehjänä steissille. Voitit pelin!",
        "tappio": "Valitan hävisit pelin. Yritä uudelleen.",
        "kohtaaVastustaja": "Kohtaa",
        "otaResurssi": "Ota",
        "kasaaKaukolippu": "Kasaa",
        "kohtalokasVirhe": "Ohjelmassa tapahtui kohtalokas virhe. Peli loppui."
    },
    "huoneet": [
        {
            "huonenimi": "Steissi",
            "huoneNro": 1,
            "huoneteksti": "Tähän tilanteeseen on taas päädytty. Olet Helsingin steissillä. Ympärillä kymmenet ihmiset vilisevät kiireessään seuraavaan junaan tai bussiin, katuesittäjät soittavat harmonikkaa ja kerjäläiset heiluttelevat kuppejaan. Tyypillistä Helsingin keskustaa… Tästä alkaa suuri siis seikkailu! Tehtäväsi on löytää jonkinlainen kaukolippu ja paeta kauhealta pääkaupunkiseudulta. Jatka junaraiteille edetäksesi muihin kaupunginosiin!",
            "huonehp": null,
            "pohjoinen": {
                "huoneeseen": 2,
                "avain": null
            },
            "ita": null,
            "etela": {
                "huoneeseen": 16,
                "avain": 2
            },
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": null
        },
        {
            "huonenimi": "Junaraiteet",
            "huoneNro": 2,
            "huoneteksti": "Saavut aina niin ihanille Helsingin päärautatieaseman junaraiteille. Edessäsi on monia eri vaihtoehtoja jatkaa seikkailussasi. Espoo, Vantaa tai jopa kauhea Itä-Helsinki. Graffiteja jokaisella seinällä, roskia maassa ja uskot jopa näkeväsi elävän rotan. Rakennustyömaidenkin melu on kuin sotatantereella.",
            "huonehp": null,
            "pohjoinen": {
                "huoneeseen": 3,
                "avain": 1
            },
            "ita": {
                "huoneeseen": 12,
                "avain": 1
            },
            "etela": {
                "huoneeseen": 1,
                "avain": null
            },
            "lansi": {
                "huoneeseen": 11,
                "avain": 1
            },
            "avain": {
                "nimi": "junalippu",
                "numero": 1,
                "teksti": "Näet seinään purkalla liimatun paperin palan, katsot tarkemmin ja huomaat sen olevan junalippu. Tästä on varmasti apua!",
                "vaikutus": "Avasit mahdollisuuden liikkua muihin kaupunginosiin!",
                "pisteet": 10,
                "hp": 0
            },
            "esine": null,
            "vastustaja": null
        },
        {
            "huonenimi": "Malmi",
            "huoneNro": 3,
            "huoneteksti": "Pääsit pahamaineiselle Malmin teollisuusalueelle, Tattarisuolle. Ympärilläsi on varsin hiljaista. Uskot hiljaisuuden tuovan itsellesi lisää voimaa. Voit jatkaa matkaasi takaisin keskustaan, tai Tikkurilaan.",
            "huonehp": {
                "hp": 5,
                "tekstit": {
                    "vaikutus": "Hiljaisuus voimaannuttaa sinua!",
                    "loppu": "Nyt ympärillä vilisee jo autoja. Hiljaisuus on kadonnut."
                },
                "toistoLkm": 3
            },
            "pohjoinen": {
                "huoneeseen": 4,
                "avain": null
            },
            "ita": null,
            "etela": {
                "huoneeseen": 2,
                "avain": null
            },
            "lansi": null,
            "avain": null,
            "vastustaja": {
                "nimi": "Malmin Matrix",
                "teksti": "Liiallinen hiljaisuus ei ole koskaan hyvä merkki. Tunnet selkärangassasi jonkun olevan takanasi. Käännyt katsomaan, ja näet Malmin Matrixin.",
                "voittoviesti": "Väistäppä tämä! Voitit Matrixin. Hän tuskin enää palaa.",
                "tappioviesti": "Voi ei. Matrix väisteli iskusi liian tehokkaasti. Voit yrittää uudestaan.",
                "pisteet": 20,
                "hp": 10,
                "voittoraja": 20
            },
            "esine": null
        },
        {
            "huonenimi": "Tikkurila",
            "huoneNro": 4,
            "huoneteksti": "Rantaudut kenties Suomen törkyisimpään kauppakeskukseen, Dixiin, Tikkurilan keskukseen. Koet olosi uhatuksi, mutta et oikein tiedä miksi. Täältä on onneksi hyvät junayhteydet; Voit suunnata Korsoon, Myyrmäkeen, Kontulaan tai Malmille. ",
            "huonehp": null,
            "pohjoinen": {
                "huoneeseen": 5,
                "avain": null
            },
            "ita": {
                "huoneeseen": 8,
                "avain": null
            },
            "etela": {
                "huoneeseen": 3,
                "avain": null
            },
            "lansi": {
                "huoneeseen": 7,
                "avain": null
            },
            "vastustaja": null,
            "avain": null,
            "esine": {
                "nimi": "Mora",
                "teksti": "Jollain tuurilla näet kulman takana pilkottavan terän. Menet sen luokse ja huomaat sen olevan ihka aito mora! Uskot moran lisäävän itsevarmuuttasi taisteluissa!",
                "vaikutus": "Itsevarmuutesi kasvoi runsaasti! Nostaessa sitä viilsit kuitenkin käteesi, joka heikensi terveyttäsi.",
                "pisteet": 25,
                "hp": -15
            }
        },
        {
            "huonenimi": "Korso",
            "huoneNro": 5,
            "huoneteksti": "Korso, tiedät kyllä mikä meininki täällä päin on. Öykkäreitä ja humalaisia joka puolella, mutta yrität selvitä täältä hengissä. Jos et viihdy, voit ottaa junan Keravalle tai Tikkurilaan.",
            "huonehp": null,
            "pohjoinen": {
                "huoneeseen": 6,
                "avain": null
            },
            "ita": null,
            "etela": {
                "huoneeseen": 4,
                "avain": null
            },
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": {
                "nimi": "ES",
                "teksti": "Kurkkuasi kuivaa hiukan, näet roskiksen päällä avaamattoman tölkin, näyttää ihan ES:tä.",
                "vaikutus": "Juot juoman ja vireytesi kasvaa räjähdysmäisesti!",
                "pisteet": 15,
                "hp": 10
            }
        },
        {
            "huonenimi": "Kerava",
            "huoneNro": 6,
            "huoneteksti": "Kerava, näin Helsingin keskustasta pitkälle pääsit junalipullasi. Täältä et valitettavasti voi edetä junalla enempää pohjoiseen. Voit kuitenkin ottaa bussin Kannelmäkeen tai Myllypuroon, tai vaihtoehtoisesti siirtyä Korsoon.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": {
                "huoneeseen": 15,
                "avain": null
            },
            "etela": {
                "huoneeseen": 5,
                "avain": null
            },
            "lansi": {
                "huoneeseen": 14,
                "avain": null
            },
            "avain": null,
            "vastustaja": {
                "nimi": "Keravan Paholainen",
                "teksti": "Edessäsi häämöttää Keravan paholainen. Olet kuullut, että sillä on tapana viedä ihmisiltä esineitä, joten haluat puolustautua.",
                "voittoviesti": "Voitit paholaisen! Voit nyt jatkaa matkaasi myös bussilla.",
                "tappioviesti": "Voi pahus! Paholainen vei morasi. Et voi enää käyttää sitä puolustautumiseen. Haluatko kostaa paholaiselle?",
                "pisteet": 20,
                "hp": 30,
                "voittoraja": 15
            },
            "esine": null
        },
        {
            "huonenimi": "Myyrmäki",
            "huoneNro": 7,
            "huoneteksti": "Harvat valitsevat Myyrmäen reitikseen, mutta erilaisuus on rikkaus? Ympärilläsi näet kaikenmaailman avohoitopotilaita sekä huumeiden ongelmakäyttäjiä.",
            "huonehp": {
                "hp": -10,
                "tekstit": {
                    "vaikutus": "Haju täällä on niin karmea, että terveytesi heikkenee.",
                    "loppu": "Haju on poissa!"
                },
                "toistoLkm": 7
            },
            "pohjoinen": null,
            "ita": null,
            "etela": {
                "huoneeseen": 9,
                "avain": null
            },
            "lansi": null,
            "vastustaja": {
                "nimi": "Myyrmäen rölli",
                "teksti": "Tälle hajulle on oltava jokin syy. Seuraat löyhkää parkkipaikalle ja näet jonkinlaisen olennon. Sehän on Myyrmäen rölli! Sen on oltava hajun lähde! Jos voitat hänet, kenties haju katoaa?",
                "voittoviesti": "Voitit röllin! Haju ei kadonnut kokonaan, mutta selvästi lieventyi. Ehkä se hälvenee kokonaan ajan kanssa.",
                "tappioviesti": "Jäit toiseksi taistelussa röllille. Terveytesi heikkeni.",
                "pisteet": 20,
                "hp": 20,
                "voittoraja": 10
            },
            "avain": null,
            "esine": null
        },
        {
            "huonenimi": "Kontula",
            "huoneNro": 8,
            "huoneteksti": "Valitsit reitiksesi Kontulan. Saavut Kontulan aukiolle. Katutaide loistaa ja linnut laulaa. Huumeruiskut siellä täällä eivät masenna mieltäsi. Et voi palata Tikkurilaan, vaan sinun on jatkettava Myllypuroon.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": null,
            "etela": {
                "huoneeseen": 10,
                "avain": null
            },
            "lansi": null,
            "avain": null,
            "vastustaja": null,
            "esine": {
                "nimi": "seteli",
                "teksti": "Huomaat ilmassa leijailevan harmaan paperin. Katsottuasi tarkemmin, huomaat, että se onkin 5 euron seteli!",
                "vaikutus": "Ilmainen raha saa aina hymyn huulille. Ansaitsit 100 pistettä lisää!",
                "pisteet": 100,
                "hp": 0
            }
        },
        {
            "huonenimi": "Kannelmäki",
            "huoneNro": 9,
            "huoneteksti": "Oi Kannelmäki. Täällä on aina niin hiljaista - Liian hiljaista. Tämä on varmasti kolkoin juna-asema mitä olet eläessäsi nähnyt. Voit jatkaa matkaasi junalla Leppävaaraan.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": null,
            "etela": {
                "huoneeseen": 11,
                "avain": null
            },
            "lansi": null,
            "vastustaja": {
                "nimi": "Rosvo",
                "teksti": "Epäilyttävän oloinen henkilö lähestyy sinua, kenties rosvo.",
                "voittoviesti": "Voitit rosvon! Niitä on täällä ilmeisesti vaikka muille jakaa. Rosvo pudotti mielenkiintoisen paperinpalan.",
                "tappioviesti": "Voi pahus. Rosvo voitti ja karkasi paikalta.",
                "pisteet": 20,
                "hp": 20,
                "voittoraja": 15
            },
            "avain": null,
            "esine": {
                "nimi": "Kaukolippu 4/4",
                "teksti": "Nostatko paperinpalan?",
                "vaikutus": "Paperi paljastuikin kaukolipun 4. palaksi!",
                "pisteet": 25,
                "hp": 0
            }
        },
        {
            "huonenimi": "Myllypuro",
            "huoneNro": 10,
            "huoneteksti": "Saavut Myllypuroon, siihen Helsingin kaupunginosaan josta kukaan ei juuri puhu. Edessäsi on Myllypuron ostari, joka ei miellytä silmääsi, mutta on kuitenkin mukavamman oloinen kun Dixi. Matkasi jatkuu junalla Itäkeskukseen.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": null,
            "etela": {
                "huoneeseen": 12,
                "avain": null
            },
            "lansi": null,
            "vastustaja": {
                "nimi": "Myllypuron iso muhis",
                "teksti": "Eikai vain, pahamaineinen, valtavan kokoinen Myllypuron iso muhis häämöttää edessäsi. Hän ei näytä iloiselta. Huomaat hänen taskustaan pilkottavan paperinpalan, kenties kaukolipun pala? Nyt on taisteltava!",
                "voittoviesti": "Huhhuh, voitit ison muhiksen. Tutkit hänen taskut, ja hänen sieltä putoaa paperinpala",
                "tappioviesti": "Voi pahus. Iso muhis on syystäkin pelätty. Haluat kuitenkin tietää, mikä hänen taskussa oleva paperinpala on, joten joudut taistella uudestaan.",
                "pisteet": 20,
                "hp": 20,
                "voittoraja": 15
            },
            "avain": null,
            "esine": {
                "nimi": "Kaukolippu 2/4",
                "teksti": "Nostatko paperinpalan?",
                "vaikutus": "Paperi paljastuikin kaukolipun 2. palaksi!",
                "pisteet": 25,
                "hp": 0
            }
        },
        {
            "huonenimi": "Leppävaara",
            "huoneNro": 11,
            "huoneteksti": "Leppävaara, kuin Espoon keskus, muttei kuitenkaan. Tunnet ilmassa kuitenkin poistuneesi Vantaan ja Helsingin ilmapiiristä. Ympärillä vilisee “roadmaneja”, maahanmuuttajia sekä stereotyyppisiä suomenruotsalaisia. Pääset tästä vielä syvimpään päätyyn eli Espoon keskukseen tai takaisin Helsingin keskustaan.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": {
                "huoneeseen": 2,
                "avain": null
            },
            "etela": null,
            "lansi": {
                "huoneeseen": 13,
                "avain": null
            },
            "vastustaja": {
                "nimi": "Leppävaaran Igbo",
                "teksti": "Normaalin ihmisjoukon keskellä näet uhkaavan näköisen olennon, ilmeisimmin Leppävaaran igbo.",
                "voittoviesti": "Sehän oli helppoa?",
                "tappioviesti": "Igbon uhkaavat tanssit saavat sinut kauhusti kankeaksi ja häviät taistelun.",
                "pisteet": 50,
                "hp": 5,
                "voittoraja": 0
            },
            "avain": null,
            "esine": null
        },
        {
            "huonenimi": "Itäkeskus",
            "huoneNro": 12,
            "huoneteksti": "Saavut Itäkeskukseen. Sinulla on omat ennakkoluulot tästäkin paikasta, mutta uskot selviytyväsi hengissä. Ympäristösi on kuitenkin hyvin identtinen aiempien paikkojen kanssa, metelin määrä poisluettuna. Täältä et pääse muualle kuin keskustaan.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": null,
            "etela": null,
            "lansi": {
                "huoneeseen": 2,
                "avain": null
            },
            "vastustaja": null,
            "avain": null,
            "esine": {
                "nimi": "Kaukolippu 1/4",
                "teksti": "Näet lattialla paperinpalan. Nostatko sen?",
                "vaikutus": "Paperi paljastuikin kaukolipun 1. palaksi!",
                "pisteet": 25,
                "hp": 0
            }
        },
        {
            "huonenimi": "Espoon keskus",
            "huoneNro": 13,
            "huoneteksti": "Jos aistit Leppävaarassa poistuneesi Vantaalta, on se viimeistään nyt varmaa. Aistit ympärillä kävelevien ihmisten tulotason olevan ainakin 50% korkeampi kuin omasi. Tätä pidemmälle et pääse lipullasi, joten joudut palaamaan Leppävaaraan.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": {
                "huoneeseen": 11,
                "avain": null
            },
            "etela": null,
            "lansi": null,
            "vastustaja": {
                "nimi": "Espoon spuge",
                "teksti": "Näet täällä korkean tulotason alueella kuitenkin matkasi ensimmäisen kodittoman. Jostain syystä koet spugen uhkaavaksi.",
                "voittoviesti": "Voitit spugen. Hän vihjaa sinulle, että yksi kaukolipun paloista sijaitsee linja-autossa.",
                "tappioviesti": "Spugen katutappelu historia on kattava ja sen kyllä huomaa. Saat päähäsi oikein kunnolla",
                "pisteet": 30,
                "hp": 10,
                "voittoraja": 5
            },
            "avain": null,
            "esine": null
        },
        {
            "huonenimi": "Bussi Kannelmäkeen",
            "huoneNro": 14,
            "huoneteksti": "Bussimatkat pääkaupunkiseudulla ovat aina samanlaisia. Kolme rääkyvää vauvaa, kaksi tai enemmän örveltäjää ja loput ovatkin hiljaisia kulkijoita. Tuoksukin on erittäin hermeettinen. Toivot sydämesi kyllyydestä, että lipuntarkastaja ei nouse tähän bussiin.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": {
                "huoneeseen": 9,
                "avain": null
            },
            "etela": null,
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": {
                "nimi": "Kaukolippu 3/4",
                "teksti": "Satut huomaamaan penkkisi välissä ryppyisen paperin.",
                "vaikutus": "Paperi paljastuikin kaukolipun 3. palaksi!",
                "pisteet": 25,
                "hp": 0
            }
        },
        {
            "huonenimi": "Bussi Myllypuroon",
            "huoneNro": 15,
            "huoneteksti": "Bussimatkat pääkaupunkiseudulla ovat aina samanlaisia. Kolme rääkyvää vauvaa, kaksi tai enemmän örveltäjää ja loput ovatkin hiljaisia kulkijoita. Tuoksukin on erittäin hermeettinen. Toivot sydämesi kyllyydestä, että lipuntarkastaja ei nouse tähän bussiin.",
            "huonehp": null,
            "pohjoinen": null,
            "ita": null,
            "etela": null,
            "lansi": {
                "huoneeseen": 10,
                "avain": null
            },
            "vastustaja": {
                "nimi": "Lipuntarkastaja",
                "teksti": "Voi pahus! Tarkastaja astui bussiin sisälle, ja astelee luoksesi.",
                "voittoviesti": "Pääsit karkuun!",
                "tappioviesti": "Lipuntarkastaja sai sinut kiinni, menetit 80 pistettä.",
                "pisteet": 20,
                "hp": 15,
                "voittoraja": 15
            },
            "avain": null,
            "esine": null
        },
        {
            "huonenimi": "Voittohuone",
            "huoneNro": 16,
            "huoneteksti": "Suuri seikkailusi pääkaupunkiseudulla on nyt ohi. Voitit pelin! Jos haluat pelata uudestaan, päivitä sivu!",
            "huonehp": null,
            "pohjoinen": null,
            "ita": null,
            "etela": null,
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": null
        }
    ]
};
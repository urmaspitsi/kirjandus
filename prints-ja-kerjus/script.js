const chapters = [
  {
    number: 1,
    summary:
      "Londonis sünnivad samal päeval kaks poissi: kuninglik Edward Tudor ja vaene Tom Canty.",
    events:
      "Algus vastandab kohe kahe lapse elu. Ühte last tervitatakse rõõmuga kogu riigis, teist peetakse vaesuses peaaegu koormaks.",
    characters: "Edward Tudor, Tom Canty, Canty perekond, õukond"
  },
  {
    number: 2,
    summary:
      "Tom kasvab Offali õues, kus ta kogeb vaesust, nälga ja vägivalda, kuid armastab lugusid lossidest ja printsidest.",
    events:
      "Isa John Canty on julm, vanaema kuri ning isa Andrew õpetab Tomi lugema. Tõeline pääsetee on Tomi kujutlusvõime.",
    characters: "Tom Canty, John Canty, ema Canty, Bet, Nan, isa Andrew"
  },
  {
    number: 3,
    summary:
      "Tom läheb palee juurde, näeb printsi ja satub esimest korda oma unistuse keskele.",
    events:
      "Valvur kohtleb Tomi halvasti, kuid Edward märkab seda ja laseb poisi sisse. Nii saavad kaks peategelast kokku.",
    characters: "Tom Canty, Edward Tudor, paleevalvur"
  },
  {
    number: 4,
    summary:
      "Poisid avastavad, et nad näevad peaaegu täpselt ühesugused välja, ja vahetavad nalja pärast riided.",
    events:
      "Edward märkab Tomi kehal vägivalla jälgi ning tahab valvurile noomida teha. Kuna tal on nüüd seljas kerjuseriided, visatakse ta hoopis ise paleest välja.",
    characters: "Tom Canty, Edward Tudor, paleevalvur"
  },
  {
    number: 5,
    summary:
      "Tom jääb paleesse lõksu ning kõik peavad teda printsiks, kuigi ta ise on paanikas.",
    events:
      "Õukond seletab Tomi segadust ajutise mälukaotusega. Tom taipab, et tõtt rääkides ei usu teda niikuinii keegi.",
    characters: "Tom Canty, õukondlased, Henry VIII"
  },
  {
    number: 6,
    summary:
      "Tom püüab printsina käituda, õppides kiiresti palee kombeid ja rolle.",
    events:
      "Ta satub piinlikesse olukordadesse, sest ei tea õukonna tavasid, kuid tema loomulik heasüdamlikkus jätab mõnelegi hea mulje.",
    characters: "Tom Canty, lady Jane Grey, õukond"
  },
  {
    number: 7,
    summary:
      "Edward satub tänavale, kus teda ei tunta ära ja tema sõnu peetakse hullumeelseks jutuks.",
    events:
      "Ta kogeb esimest korda päris nälga, räpasust ja ohtu. Kõik see šokeerib poissi, kes on seni elanud kaitstud maailmas.",
    characters: "Edward Tudor, Londoni rahvas"
  },
  {
    number: 8,
    summary:
      "Edward jõuab Cantyde juurde ja saab tunda sama julma kohtlemist, mida Tom oli kodus talunud.",
    events:
      "John Canty ei usu poisi juttu printsiks olemisest. Edward näeb omal nahal, kui karm ja alandav on vaese lapse elu.",
    characters: "Edward Tudor, John Canty, Canty perekond"
  },
  {
    number: 9,
    summary:
      "Tom õpib, et printsiks olemine tähendab lisaks uhkusele ka suurt vastutust ja pidevat jälgimist.",
    events:
      "Ta peab osalema ametlikes toimingutes ja saab aru, kui palju võimuotsuseid tehakse inimeste elu üle. Tom hakkab valitsejate maailma kartma.",
    characters: "Tom Canty, Henry VIII, nõunikud"
  },
  {
    number: 10,
    summary:
      "Edward põgeneb Cantyde käest, kuid langeb peagi uutesse ohtudesse.",
    events:
      "Poiss püüab meeleheitlikult oma väärikust hoida, kuid keegi ei võta teda tõsiselt. Tema kuninglik identiteet muutub talle peaaegu koormaks.",
    characters: "Edward Tudor, John Canty"
  },
  {
    number: 11,
    summary:
      "Tomi kohta levib palees arusaam, et printsi mõistus on häiritud.",
    events:
      "See võimaldab Tomi eksimusi vabandada, kuid suurendab ka pingeid. Tom peab kogu aeg ettevaatlik olema, et end mitte paljastada.",
    characters: "Tom Canty, õukonna arstid, õukondlased"
  },
  {
    number: 12,
    summary:
      "Edward kohtub Miles Hendoniga, kellest saab tema kõige ustavam toetaja.",
    events:
      "Miles on elukogenud, terane ja julge. Kuigi ta ei mõista kogu tõde, tajub ta, et poisil on eriline väärikus ning ta otsustab teda kaitsta.",
    characters: "Edward Tudor, Miles Hendon"
  },
  {
    number: 13,
    summary:
      "Tom tunneb aina enam kaastunnet tavainimeste vastu ning püüab mõnes otsuses olla õiglane.",
    events:
      "Palees nähtud kohtuasjad raputavad teda. Ta märkab, kui kergesti võivad seadused olla vaeste vastu julmad.",
    characters: "Tom Canty, kohtunikud, õukondlased"
  },
  {
    number: 14,
    summary:
      "Miles ja Edward rändavad koos ning poisi jutt troonist tekitab kord nalja, kord pahandust.",
    events:
      "Miles hakkab Edwardi kaitsma isegi siis, kui peab tema väiteid veidraks. Nende vahel tekib sõprus ja usaldus.",
    characters: "Edward Tudor, Miles Hendon"
  },
  {
    number: 15,
    summary:
      "Mõlemad poisid elavad järjest sügavamalt teise inimese elu ning nende maailmapilt muutub.",
    events:
      "Tom näeb võimu raskust, Edward rahva kannatusi. Teose keskne mõte hakkab selgemalt välja joonistuma.",
    characters: "Tom Canty, Edward Tudor"
  },
  {
    number: 16,
    summary:
      "Edward satub seaduse ja karistuste maailma keskele ning näeb, kui karmilt koheldakse vaeseid ja nõrku.",
    events:
      "Ta puutub kokku ebaõiglaste süüdistuste, piinamise ja karmide karistustega. See kogemus mõjutab tema hilisemat valitsemist väga tugevalt.",
    characters: "Edward Tudor, Miles Hendon, seaduse esindajad"
  },
  {
    number: 17,
    summary:
      "Tom tunneb ennast troonile liiga lähedal ning kardab üha rohkem päris printsi saatuse pärast.",
    events:
      "Ta püüab teha head, aga ei suuda palee mängureeglitest põgeneda. Tema südametunnistus muutub järjest raskemaks.",
    characters: "Tom Canty, õukond"
  },
  {
    number: 18,
    summary:
      "Edward ja Miles satuvad uute petiste, hulkurite ja kurjategijate sekka.",
    events:
      "Poiss näeb, et osa inimesi kuritarvitab segast aega ja vaesust. Samal ajal õpib ta, et lihtsate inimeste seas leidub ka ausust ja julgust.",
    characters: "Edward Tudor, Miles Hendon, rändurid"
  },
  {
    number: 19,
    summary:
      "Tom peab toime tulema riigiasjade ja tseremooniatega, mis muutuvad üha ametlikumaks.",
    events:
      "Kõik ootavad, et prints teaks õigeid sõnu ja žeste. Tom pääseb korduvalt napilt häbist tänu teiste seletustele ja oma taibukusele.",
    characters: "Tom Canty, õukond, nõunikud"
  },
  {
    number: 20,
    summary:
      "Miles jutustab oma minevikust ning selgub, et ka tema on ilma jäetud õiglasest kohast oma kodus.",
    events:
      "Ta räägib Hendoni saalist, oma vennast Hugh'st ja armastatud Edithist. See muudab ta Edwardi silmis veelgi usaldusväärsemaks.",
    characters: "Miles Hendon, Edward Tudor, Hugh Hendon, Edith"
  },
  {
    number: 21,
    summary:
      "Edward ja Miles jõuavad Hendoni saali, kus Miles loodab oma elu tagasi saada.",
    events:
      "Seal selgub, et Hugh on võimu enda kätte haaranud ning eitab Milesi õigusi. Edward näeb, kuidas ebaõiglus võib tabada ka aadlikku.",
    characters: "Miles Hendon, Edward Tudor, Hugh Hendon, Edith"
  },
  {
    number: 22,
    summary:
      "Miles ja Edward satuvad vangistusse ning nende olukord muutub eriti ohtlikuks.",
    events:
      "Poisi kuninglikud nõudmised toovad kaasa uusi pahandusi. Ometi ei jäta Miles teda hätta ka kõige raskemal hetkel.",
    characters: "Edward Tudor, Miles Hendon, Hugh Hendon"
  },
  {
    number: 23,
    summary:
      "Tom kuuleb kuningas Henry VIII surmast ning mõistab, et kroonimine läheneb hirmuäratava kiirusega.",
    events:
      "Nüüd muutub vale eriti ohtlikuks, sest küsimus pole enam ainult paleeelus, vaid kogu riigi valitsejas. Tom tunneb end järjest õnnetumalt.",
    characters: "Tom Canty, Henry VIII, õukond"
  },
  {
    number: 24,
    summary:
      "Edward pääseb lõpuks vangistusest ja liigub visalt Londoni poole tagasi.",
    events:
      "Tee on täis takistusi, kuid ta ei loobu. Tema sihikindlus näitab, et tänaval kogetud raskused on teda küpsemaks muutnud.",
    characters: "Edward Tudor, Miles Hendon"
  },
  {
    number: 25,
    summary:
      "Tom valmistatakse ette avalikeks riiklikeks tseremooniateks ning saladuse koorem muutub peaaegu talumatuks.",
    events:
      "Ta teab, et ei soovi trooni varastada. Samas ei näe ta, kuidas olukorrast ilma suure kaoseta väljuda.",
    characters: "Tom Canty, õukondlased"
  },
  {
    number: 26,
    summary:
      "Edward kogeb teel veel kord, kuidas seadused ja kombed võivad tavalisi inimesi purustada.",
    events:
      "Need kogemused kinnistavad temas otsuse valitseda tulevikus õiglasemalt. Tema areng teose jooksul jõuab siin olulise pöördepunktini.",
    characters: "Edward Tudor, lihtinimesed"
  },
  {
    number: 27,
    summary:
      "Miles päästab Edwardi mitmest hädast ning nende side muutub peaaegu perekondlikuks.",
    events:
      "Ustavus ei põhine enam ainult seiklusel, vaid sügaval austusel. Edward mõistab, et tõeline väärtus ei sõltu seisusest.",
    characters: "Edward Tudor, Miles Hendon"
  },
  {
    number: 28,
    summary:
      "Tom peab kroonimise eel viimaseid samme tegema, teades, et tõeline prints võib olla kadunud või surnud.",
    events:
      "Sisemine konflikt muutub väga teravaks. Ta tahab päästa ennast ja riiki, kuid ei suuda sündmusi enam hästi kontrollida.",
    characters: "Tom Canty, õukond"
  },
  {
    number: 29,
    summary:
      "Edward jõuab kroonimise lähedale ja püüab kõigile selgeks teha, kes ta tegelikult on.",
    events:
      "Enamik inimesi peab teda siiski petiseks. Pinged kasvavad, sest aega on jäänud väga vähe.",
    characters: "Edward Tudor, Miles Hendon, rahvas"
  },
  {
    number: 30,
    summary:
      "Kroonimistseremoonia algab ning Tom seisab otsustaval hetkel kogu riigi ees.",
    events:
      "Ta ei tunne ennast võltsvõitjana, vaid lõksus lapsena. See muudab stseeni pingeliseks ja kurvaks ühtaegu.",
    characters: "Tom Canty, õukond, rahvas"
  },
  {
    number: 31,
    summary:
      "Edward ilmub välja ja katkestab kroonimise, väites, et tema on tõeline kuningas.",
    events:
      "Algul ei usu teda peaaegu keegi, sest kerjuseriietes poiss ei vasta kuninga kujutlusele. Tom aga tunneb temas tõelise printsi ära.",
    characters: "Edward Tudor, Tom Canty, õukond"
  },
  {
    number: 32,
    summary:
      "Tõe tõestamiseks tuleb meenutada üksikasju, mida saab teada vaid päris prints.",
    events:
      "Oluliseks saab riigipitsati peidukoht. Just see detail aitab lõpuks segaduse lahendada.",
    characters: "Edward Tudor, Tom Canty, lordid"
  },
  {
    number: 33,
    summary:
      "Edward tunnistatakse õigeks valitsejaks ning Tom pääseb süüst ja hirmust.",
    events:
      "Tomi ei karistata, sest ta pole tahtnud kurja. Edward näitab kohe, et tema kogemused on teinud ta armulisemaks ja õiglasemaks.",
    characters: "Edward Tudor, Tom Canty, õukond"
  },
  {
    number: 34,
    summary:
      "Teose lõpus saavad ustavad abilised tasu ning selgub, kuidas kogetud vahetus mõjutas kõigi elu.",
    events:
      "Miles Hendon saab tagasi oma au ja õigused, Tomile antakse eriline koht ning uus kuningas püüab valitseda kaastundlikult. Lugu lõpeb mõttega, et tõeline õiglus sünnib kogemusest ja empaatiast.",
    characters: "Edward VI, Tom Canty, Miles Hendon, Hugh Hendon, Edith"
  }
];

const characters = [
  {
    name: "Tom Canty",
    role: "Kerjuspoiss",
    description:
      "Vaene, nutikas ja suure kujutlusvõimega poiss, kes unistab paremast elust. Paleesse sattudes jääb ta ausaks ja püüab võimu juures olla õiglane."
  },
  {
    name: "Edward Tudor",
    role: "Prints, hiljem kuningas Edward VI",
    description:
      "Inglismaa troonipärija, kes peab tänavale sattudes esimest korda oma rahva tegelikku elu tundma õppima. Ta kasvab loo jooksul palju küpsemaks ja halastavamaks."
  },
  {
    name: "Miles Hendon",
    role: "Ustav abiline",
    description:
      "Julge ja hea südamega aadlimees, kes kaitseb Edwardit rännakul. Tema lojaalsus on üks kogu teose tähtsamaid väärtusi."
  },
  {
    name: "Henry VIII",
    role: "Inglismaa kuningas",
    description:
      "Edwardi isa, kelle range ja võimas kuju mõjutab kogu palee elu. Tema surm kiirendab loo kõige pingelisemat osa."
  },
  {
    name: "John Canty",
    role: "Tomi isa",
    description:
      "Vägivaldne ja hirmutav mees, kes sümboliseerib Tomi maailma julmust. Tema kaudu näeb lugeja vaesuse tumedamat poolt."
  },
  {
    name: "Tomi ema",
    role: "Hooliv vanem",
    description:
      "Leebe ja kaastundlik naine, kes armastab Tomi ning püüab kodus vähegi soojust hoida, kuigi elutingimused on väga rasked."
  },
  {
    name: "Bet ja Nan Canty",
    role: "Tomi õed",
    description:
      "Tomi kaksikõed, kes näitavad, et Canty peres leidub ka lähedust ja hoolimist. Nad kuuluvad Tomi turvalisemasse siseringi."
  },
  {
    name: "Isa Andrew",
    role: "Õpetaja",
    description:
      "Heatahtlik vaimulik, kes õpetab Tomi lugema ja jutustab talle huvitavaid lugusid. Tema abil sünnivad Tomi unistused printsidest ja paleest."
  },
  {
    name: "Hugh Hendon",
    role: "Vastane",
    description:
      "Milesi ahne ja ebaaus vend, kes püüab endale haarata Hendoni valdused. Tema kaudu kujutab teos võimu kuritarvitamist."
  },
  {
    name: "Edith",
    role: "Milesi liitlane",
    description:
      "Noor naine, kes on seotud Hendoni perekonna looga. Ta kannatab Hugh surve all ja meenutab, kui palju ebaõiglus võib inimest kahjustada."
  },
  {
    name: "Lady Jane Grey",
    role: "Õukonnatüdruk",
    description:
      "Tark ja viisakas noor aadlidaam, kes aitab paleeelu tausta paremini mõista. Tema stseenid rõhutavad õukonna ranget korda."
  },
  {
    name: "Humphrey Marlow",
    role: "Piitsutamise poiss",
    description:
      "Õukonnas tegutsev poiss, kes saab printsi eksimuste eest karistada. Tema kaudu tuleb välja süsteemi kummalisus ja ebaõiglus."
  }
];

const questions = [
  {
    id: 1,
    question: "Miks satuvad Tom Canty ja Edward Tudor teineteise rolli?",
    options: [
      "Nad vahetavad nalja pärast riided ja neid aetakse segamini.",
      "Kuningas käsib neil teadlikult kohti vahetada.",
      "Nad on salaja vennad ja peavad põgenema.",
      "Tom röövib printsi krooni ja peidab end ära.",
      "Õukond korraldab neile kostüümipeo."
    ],
    answer: 0,
    explanation:
      "Poisid näevad väga sarnased välja ja vahetavad uudishimust riided. Sellest algab kogu loo suur segadus."
  },
  {
    id: 2,
    question: "Kus elab Tom Canty enne paleesse sattumist?",
    options: [
      "Offali õues vaeses Londoni linnaosas.",
      "Hendoni saalis maal.",
      "Toweris valvurite juures.",
      "Kloostris koos munkadega.",
      "Kuningalossi külalistetubades."
    ],
    answer: 0,
    explanation:
      "Tomi kodu on Offali õu, mis kujutab vaesust, kitsikust ja ohtlikku linnakeskkonda."
  },
  {
    id: 3,
    question: "Kes aitab Edwardit tema rännakul kõige ustavamalt?",
    options: [
      "Miles Hendon",
      "John Canty",
      "Henry VIII",
      "Hugh Hendon",
      "Humphrey Marlow"
    ],
    answer: 0,
    explanation:
      "Miles Hendon on Edwardi kõige ustavam kaaslane ning kaitseb teda korduvalt."
  },
  {
    id: 4,
    question: "Mida õpib Edward tänaval elades kõige rohkem?",
    options: [
      "Kui raske ja ebaõiglane võib olla lihtinimese elu.",
      "Kuidas juhtida laevastikku merelahingus.",
      "Kuidas kirjutada salakoode ladina keeles.",
      "Et palees elamine on tegelikult lihtsam kui ta arvas.",
      "Et Tom tahab temalt trooni varastada."
    ],
    answer: 0,
    explanation:
      "Teose põhiteema on kogemuse kaudu sündiv empaatia. Tänavaelu muudab Edwardi tulevast valitsemist."
  },
  {
    id: 5,
    question: "Milline omadus aitab Tomil palees ellu jääda?",
    options: [
      "Taibukus ja loomulik heasüdamlikkus",
      "Sõjaline väljaõpe",
      "Täiuslik teadmine õukonnareeglitest",
      "Salajane abi John Cantylt",
      "Oskus kõiki ära hirmutada"
    ],
    answer: 0,
    explanation:
      "Tom ei tunne palee kombeid, kuid on kiire õppija ja tahab teiste suhtes õiglane olla."
  },
  {
    id: 6,
    question: "Kes on John Canty?",
    options: [
      "Tomi vägivaldne isa",
      "Edwardi õpetaja",
      "Milesi ustav teenija",
      "Kuninga ihukaitsja",
      "Kroonimise korraldaja"
    ],
    answer: 0,
    explanation:
      "John Canty on Tomi isa ning üks teose karmimaid täiskasvanud tegelasi."
  },
  {
    id: 7,
    question: "Mis muudab Tomi jaoks troonile lähedale sattumise hirmutavaks?",
    options: [
      "Ta teab, et ta pole päris prints ja kardab tõe paljastumist.",
      "Ta ei oska lugeda ega kirjutada.",
      "Ta tahab kohe sõtta minna, kuid teda ei lubata.",
      "Ta plaanib põgeneda välismaale.",
      "Ta tahab Hugh Hendoni vangistada."
    ],
    answer: 0,
    explanation:
      "Tom elab pideva saladuse all ning tunneb sügavat vastutust ja hirmu."
  },
  {
    id: 8,
    question: "Miks on Miles Hendoni kõrvalugu oluline?",
    options: [
      "See näitab, et ebaõiglus võib tabada ka aadlikku, mitte ainult vaest.",
      "See seletab, kuidas kuninglik pitsat tehti.",
      "See õpetab Tomile mõõgavõitlust.",
      "See tõestab, et Edward ei olnudki prints.",
      "See näitab, et Jane Grey tahtis trooni."
    ],
    answer: 0,
    explanation:
      "Milesi lugu laiendab teose teemat: ebaõiglus pole seotud ainult ühe seisusega."
  },
  {
    id: 9,
    question: "Mis juhtub pärast Henry VIII surma?",
    options: [
      "Segadus trooni ümber muutub eriti ohtlikuks, sest kroonimine läheneb.",
      "Tom saadetakse kohe koju tagasi.",
      "Miles kuulutatakse kuningaks.",
      "John Canty saab õukondlaseks.",
      "Edward loobub troonist vabatahtlikult."
    ],
    answer: 0,
    explanation:
      "Kuninga surm tähendab, et valeprints võib kohe päriselt kroonitud saada."
  },
  {
    id: 10,
    question: "Milline ese aitab lõpuosas tõde kinnitada?",
    options: [
      "Riigipitsat",
      "Kuldmõõk",
      "Tomi palveraamat",
      "Milesi vapikilp",
      "Kuninganna kiri"
    ],
    answer: 0,
    explanation:
      "Riigipitsati peidukoht on detail, mida päris prints teab ja mis aitab segaduse lahendada."
  },
  {
    id: 11,
    question: "Milline on teose üks peamisi sõnumeid?",
    options: [
      "Valitseja peab rahvast mõistma, mitte ainult käsutama.",
      "Ainult aadlikud võivad olla head inimesed.",
      "Vaesus teeb kõik inimesed kurjaks.",
      "Tõde pole poliitikas oluline.",
      "Lapsepõlv ei mõjuta inimese iseloomu."
    ],
    answer: 0,
    explanation:
      "Mark Twain rõhutab, et võim ilma empaatiata võib muutuda julmaks."
  },
  {
    id: 12,
    question: "Kuidas käitub Tom teose lõpus pärast tõe selgumist?",
    options: [
      "Ta ei saa karistada, sest ta pole trooni tahtlikult varastanud.",
      "Ta pannakse kohe vanglasse.",
      "Ta põgeneb välismaale.",
      "Ta hakkab Milesi teenriks.",
      "Ta peidab Edwardi uuesti ära."
    ],
    answer: 0,
    explanation:
      "Edward mõistab, et Tom ei tegutsenud pahatahtlikult, ning kohtleb teda armulikult."
  }
];

const storageKey = "prints-ja-kerjus-missed";

const chapterList = document.querySelector("#chapter-list");
const characterGrid = document.querySelector("#character-grid");
const quizShell = document.querySelector("#quiz-shell");
const quizEmpty = document.querySelector("#quiz-empty");
const missedList = document.querySelector("#missed-list");
const missedSummary = document.querySelector("#missed-summary");
const answeredCount = document.querySelector("#answered-count");
const correctCount = document.querySelector("#correct-count");
const missedCount = document.querySelector("#missed-count");
const startQuizButton = document.querySelector("#start-quiz");
const startReviewButton = document.querySelector("#start-review");
const resetProgressButton = document.querySelector("#reset-progress");

let session = {
  mode: null,
  items: [],
  index: 0,
  correct: 0,
  answered: 0
};

function getMissedMap() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function setMissedMap(value) {
  localStorage.setItem(storageKey, JSON.stringify(value));
}

function renderChapters() {
  chapterList.innerHTML = chapters
    .map(
      (chapter, index) => `
        <article class="chapter-item reveal ${index === 0 ? "open" : ""}" style="animation-delay:${index * 35}ms">
          <button class="chapter-toggle" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <span class="chapter-toggle-text">
              <span class="chapter-title">Peatükk ${chapter.number}</span>
              <span class="chapter-brief">${chapter.summary}</span>
            </span>
            <span class="chapter-symbol">+</span>
          </button>
          <div class="chapter-panel">
            <p><strong>Olulisemad sündmused:</strong> ${chapter.events}</p>
            <p><strong>Olulisemad tegelased:</strong> ${chapter.characters}</p>
          </div>
        </article>
      `
    )
    .join("");

  chapterList.querySelectorAll(".chapter-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const article = button.closest(".chapter-item");
      const isOpen = article.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderCharacters() {
  characterGrid.innerHTML = characters
    .map(
      (character, index) => `
        <article class="character-item reveal" style="animation-delay:${index * 40}ms">
          <h3 class="character-name">${character.name}</h3>
          <span class="character-role">${character.role}</span>
          <p>${character.description}</p>
        </article>
      `
    )
    .join("");
}

function updateStats() {
  answeredCount.textContent = session.answered;
  correctCount.textContent = session.correct;
  missedCount.textContent = Object.keys(getMissedMap()).length;
}

function rememberMissed(question) {
  const missed = getMissedMap();
  missed[question.id] = {
    question: question.question,
    answer: question.options[question.answer],
    count: (missed[question.id]?.count || 0) + 1
  };
  setMissedMap(missed);
}

function forgetMissed(questionId) {
  const missed = getMissedMap();
  delete missed[questionId];
  setMissedMap(missed);
}

function renderMissedList() {
  const missed = Object.values(getMissedMap()).sort((a, b) => b.count - a.count);

  if (!missed.length) {
    missedSummary.textContent =
      "Praegu pole ühtegi meeles peetud viga. Kui eksid, lisatakse küsimus siia kordamiseks.";
    missedList.innerHTML = "";
    updateStats();
    return;
  }

  missedSummary.textContent =
    "Need küsimused on sul varem valesti läinud. Kõige rohkem eksitud küsimused on eespool.";
  missedList.innerHTML = missed
    .map(
      (item) => `
        <div class="missed-item">
          <strong>${item.question}</strong>
          <span>Õige vastus: ${item.answer}</span><br />
          <span>Eksitud kordi: ${item.count}</span>
        </div>
      `
    )
    .join("");

  updateStats();
}

function renderQuestion() {
  const question = session.items[session.index];

  if (!question) {
    const total = session.items.length;
    const label = session.mode === "review" ? "Kordamissessioon" : "Põhiküsimustik";
    quizShell.innerHTML = `
      <div class="reveal">
        <p class="eyebrow">${label} lõpetatud</p>
        <h3 class="quiz-question">Tulemus: ${session.correct} / ${total}</h3>
        <p class="feedback">
          ${
            session.mode === "review"
              ? "Kui mõni küsimus jäi veel valeks, hoitakse seda edasi meeles."
              : "Kui mõni küsimus läks valesti, saad selle kohe kordamisvoorus uuesti ette võtta."
          }
        </p>
      </div>
    `;
    renderMissedList();
    return;
  }

  quizShell.innerHTML = `
    <div class="reveal">
      <div class="quiz-meta">
        <span>${session.mode === "review" ? "Kordamisvoor" : "Põhiküsimustik"}</span>
        <span>Küsimus ${session.index + 1} / ${session.items.length}</span>
      </div>
      <h3 class="quiz-question">${question.question}</h3>
      <div class="options">
        ${question.options
          .map(
            (option, index) => `
              <button class="option" type="button" data-index="${index}">
                ${String.fromCharCode(65 + index)}. ${option}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="quiz-controls"></div>
    </div>
  `;

  quizShell.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(question, Number(button.dataset.index)));
  });
}

function handleAnswer(question, selectedIndex) {
  const optionButtons = [...quizShell.querySelectorAll(".option")];
  const controls = quizShell.querySelector(".quiz-controls");
  const isCorrect = selectedIndex === question.answer;

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) {
      button.classList.add("correct");
    }
    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  session.answered += 1;
  if (isCorrect) {
    session.correct += 1;
    forgetMissed(question.id);
  } else {
    rememberMissed(question);
  }

  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.textContent = isCorrect
    ? `Õige. ${question.explanation}`
    : `Praegu läks valesti. Õige vastus on: ${question.options[question.answer]}. ${question.explanation}`;
  controls.before(feedback);

  const nextButton = document.createElement("button");
  nextButton.className = "button primary";
  nextButton.type = "button";
  nextButton.textContent =
    session.index === session.items.length - 1 ? "Vaata tulemust" : "Järgmine küsimus";
  nextButton.addEventListener("click", () => {
    session.index += 1;
    updateStats();
    renderQuestion();
  });
  controls.append(nextButton);

  renderMissedList();
}

function startQuiz(mode) {
  const missedMap = getMissedMap();
  const reviewItems = questions.filter((question) => missedMap[question.id]);

  session = {
    mode,
    items: mode === "review" ? reviewItems : [...questions],
    index: 0,
    correct: 0,
    answered: 0
  };

  if (!session.items.length) {
    quizShell.innerHTML = `
      <div class="quiz-empty reveal">
        Praegu ei ole kordamiseks ühtegi valesti läinud küsimust. Tee kõigepealt põhiküsimustik läbi.
      </div>
    `;
    updateStats();
    return;
  }

  quizEmpty.hidden = true;
  updateStats();
  renderQuestion();
}

startQuizButton.addEventListener("click", () => startQuiz("main"));
startReviewButton.addEventListener("click", () => startQuiz("review"));
resetProgressButton.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  renderMissedList();
  updateStats();
  if (session.mode === "review") {
    quizShell.innerHTML = `
      <div class="quiz-empty reveal">
        Meeles peetud vead on kustutatud. Vajadusel alusta põhiküsimustikku uuesti.
      </div>
    `;
  }
});

renderChapters();
renderCharacters();
renderMissedList();
updateStats();

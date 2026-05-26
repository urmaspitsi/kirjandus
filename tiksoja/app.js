const chapters = [
  {
    title: "1. peatükk - metsa minek",
    summary: "Neli 8. klassi sõpra veedavad pärast kooli aega Tiksoja metsatukas. Nende omavaheline kõneviis, naljad ja veidi bravuurikas käitumine näitavad, et nad tahavad paista kõvemad, kui nad alati sisimas on.",
    events: ["Poisid kogunevad Tiksoja metsa.", "Lugeja saab aru, milline on pundi omavaheline dünaamika.", "Mets muutub loo peamiseks mõistatuspaigaks."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel"]
  },
  {
    title: "2. peatükk - kummaline foto",
    summary: "Naljaviluks tehtud selfilt leitakse tüdruku nägu, keda pildistamise ajal kohal ei olnud. See muudab poiste tavalise pärastlõuna uurimislooks.",
    events: ["Selfilt märgatakse salapärast tüdrukut.", "Poisid püüavad aru saada, kas tegu on nalja, vea või millegi tõsisemaga.", "Tekib esimene päris uurimisküsimus."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel", "salapärane tüdruk"]
  },
  {
    title: "3. peatükk - Kiired Kanad",
    summary: "Poisid otsustavad hakata juhtumit ise uurima. Pundi nimi Kiired Kanad on naljakas ja vastuoluline, aga aitab neil tunda, et nad on päris detektiivimeeskond.",
    events: ["Sõbrad lepivad kokku, et mõistatust ei jäeta pooleli.", "Tanel võtab detektiivirolli eriti tõsiselt.", "Uurimine saab selgema suuna."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel"]
  },
  {
    title: "4. peatükk - sündmuspaiga otsimine",
    summary: "Poisid mõtlevad, kas foto saladus on seotud täpselt selle kohaga metsas või peitub vastus kusagil mujal. Nad õpivad, et uurimisel ei piisa esimesest lihtsast oletusest.",
    events: ["Tiksoja metsa uuritakse uuesti.", "Tanel püüab vihjeid loogiliselt kokku panna.", "Liiga lihtsad seletused hakkavad kahtlased tunduma."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel"]
  },
  {
    title: "5. peatükk - jäljed minevikus",
    summary: "Uurimine viib poiste mõtted aastakümnete taha. Nad hakkavad seostama fotol nähtut kadunud koolitüdrukuga ja saavad aru, et lugu võib ulatuda 1985. aasta Tartusse.",
    events: ["Tekib seos kadunud tüdrukuga.", "Tänapäeva juhtum hakkab põimuma minevikuga.", "Poisid mõistavad, et nad peavad uurima ka vanemaid sündmusi."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel", "kadunud koolitüdruk"]
  },
  {
    title: "6. peatükk - 1985. aasta Tartu",
    summary: "Lugu avab nõukogude aja Tartu eluolu. Noorele lugejale muutub nähtavaks, kuidas igapäevaelu, asjaajamine ja peresuhted olid teistsugused kui tänapäeval.",
    events: ["Minevikuliin muutub olulisemaks.", "Nähtavale tulevad nõukogude aja olud.", "Kadunud tüdruku juhtum saab tõsisema tausta."],
    characters: ["kadunud koolitüdruk", "1985. aasta Tartuga seotud inimesed"]
  },
  {
    title: "7. peatükk - vihjete kogumine",
    summary: "Kiired Kanad püüavad eristada juhuslikke detaile päris vihjetest. Uurimine nõuab tähelepanelikkust ja paneb proovile ka sõprade kannatuse.",
    events: ["Poisid võrdlevad erinevaid oletusi.", "Taneli detektiivihuvi aitab lugu edasi viia.", "Kõik ei pruugi olla sama kindlad, kuidas edasi tegutseda."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel"]
  },
  {
    title: "8. peatükk - sõprus pinge all",
    summary: "Juhtum ei ole enam lihtsalt põnev mäng. Poiste omavahelised suhted, kodused mured ja tunded tulevad rohkem esile ning uurimine hakkab neid isiklikult mõjutama.",
    events: ["Sõprade vahel tekivad pinged.", "Kodused probleemid saavad loos suurema kaalu.", "Poisid peavad õppima üksteist kuulama."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel", "pereliikmed"]
  },
  {
    title: "9. peatükk - ebamugav tõde",
    summary: "Mida rohkem poisid teada saavad, seda selgemaks muutub, et mineviku lugu pole ainult võõras saladus. See võib olla seotud nende endi perede ja täiskasvanute valikutega.",
    events: ["Uurimine muutub isiklikumaks.", "Mineviku ja tänapäeva seosed tugevnevad.", "Poisid peavad taluma ebakindlust."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel", "täiskasvanud"]
  },
  {
    title: "10. peatükk - pildi tähendus",
    summary: "Foto ei ole enam lihtsalt hirmutav või veider leid, vaid vihje lahendamata loole. Poisid hakkavad paremini mõistma, miks tüdruku ilmumine nende pildile neid just sellesse uurimisse tõukas.",
    events: ["Foto seotakse laiemate vihjetega.", "Tüdruku lugu muutub konkreetsemaks.", "Uurimise suund saab selgemaks."],
    characters: ["salapärane tüdruk", "Tanel", "Mattias", "Joosep", "Pärtel"]
  },
  {
    title: "11. peatükk - lahenduse lähedal",
    summary: "Poisid panevad vihjeid kokku ja jõuavad lähemale sellele, mis kadunud tüdrukuga juhtus. Põnevus kasvab, sest iga uus teadmine muudab varasemaid oletusi.",
    events: ["Vihjed hakkavad tervikuks koonduma.", "Valejäljed jäävad kõrvale.", "Mineviku sündmused saavad uue tähenduse."],
    characters: ["Kiired Kanad", "kadunud koolitüdruk", "minevikuga seotud inimesed"]
  },
  {
    title: "12. peatükk - mida minevik õpetab",
    summary: "Loo lõpuosas ei ole tähtis ainult mõistatuse vastus, vaid ka see, mida poisid uurimise käigus enda, sõpruse ja perede kohta õpivad. Minevikuga tegelemine aitab neil tänapäeva paremini mõista.",
    events: ["Mõistatus saab selgema lahenduse.", "Poisid näevad oma peresid ja sõprust uue pilguga.", "Lugu jätab kõlama mõtte, et tõde ja hoolimine käivad koos."],
    characters: ["Tanel", "Mattias", "Joosep", "Pärtel", "salapärane tüdruk"]
  }
];

const characters = [
  {
    name: "Tanel",
    role: "detektiivihing",
    description: "Üks neljast sõbrast ja uurimise kõige innukam vedaja. Tanel tahab mõelda loogiliselt, jälgida vihjeid ja käituda nagu päris detektiiv, kuigi olukord on tema jaoks ka emotsionaalselt keeruline."
  },
  {
    name: "Mattias",
    role: "sõpruskonna liige",
    description: "Üks Kiiretest Kanadest. Tema roll aitab näidata, et uurimine ei ole ühe poisi soolo, vaid sõprade ühine pingutus, kus igaüks reageerib hirmule ja põnevusele omal moel."
  },
  {
    name: "Joosep",
    role: "sõpruskonna liige",
    description: "Üks neljast 8. klassi poisist. Joosep kuulub pundi siseringi ja aitab hoida loos noortepärast nalja, vaidlust ja sõpradevahelist energiat."
  },
  {
    name: "Pärtel",
    role: "sõpruskonna liige",
    description: "Neljas sõber poiste kambas. Pärteli kaudu on näha, et sama saladus võib eri inimesi erinevalt mõjutada ja sõprus tähendab ka kaaslastega arvestamist."
  },
  {
    name: "Kiired Kanad",
    role: "uurimisrühm",
    description: "Poiste endi pandud nimi oma detektiivipundile. Nimi on naljakas, aga selle taga on päris soov teada saada, kes on fotole ilmunud tüdruk ja mis temaga juhtus."
  },
  {
    name: "Salapärane tüdruk",
    role: "mõistatuse keskpunkt",
    description: "Tüdruku kuju ilmub metsas tehtud fotole ja käivitab kogu uurimise. Tema lugu seob tänapäeva 1985. aasta Tartuga ning muudab krimiloo isiklikumaks."
  },
  {
    name: "Kadunud koolitüdruk",
    role: "minevikuliini võti",
    description: "Minevikus kaduma läinud tüdruk, kellega poisid hakkavad fotol nähtut seostama. Tema kaudu räägib teos mälust, saladustest ja sellest, kuidas vanad sündmused võivad püsida kaua lahendamata."
  },
  {
    name: "Poiste pered",
    role: "isiklik taust",
    description: "Pereliikmed ei ole ainult kõrvaline taust. Uurimine puudutab ka koduseid suhteid, vanemate ja laste vahelist usaldust ning probleeme, millest on raske rääkida."
  },
  {
    name: "1985. aasta tartlased",
    role: "ajastu kandjad",
    description: "Minevikuliini inimesed aitavad näidata nõukogude aja eluolu, hirme ja asjaajamist. Nende kaudu saab lugeja aru, miks toonased valikud võisid olla keerulised."
  }
];

const questions = [
  {
    question: "Kes on raamatu autor?",
    answers: ["Ilmar Tomusk", "Maarja Astover", "Kairi Look", "Jaan Rannap", "Reeli Reinaus"],
    correct: 1,
    explanation: "Raamatu autor on Maarja Astover."
  },
  {
    question: "Kus poiste tehtud fotole ilmub salapärane tüdruk?",
    answers: ["Koolimajas", "Tiksoja metsas", "Raamatukogus", "Bussijaamas", "Spordisaalis"],
    correct: 1,
    explanation: "Mõistatus algab Tiksoja metsas tehtud fotost."
  },
  {
    question: "Mis klassis käivad loo neli sõpra?",
    answers: ["5. klassis", "6. klassis", "7. klassis", "8. klassis", "9. klassis"],
    correct: 3,
    explanation: "Avalikes tutvustustes kirjeldatakse neid 8. klassi sõpradena."
  },
  {
    question: "Mis nime poisid oma pundile panevad?",
    answers: ["Metsavahid", "Kiired Kanad", "Tiksoja Tiigrid", "Neli Uurijat", "Öökullid"],
    correct: 1,
    explanation: "Poiste uurimispundi nimi on Kiired Kanad."
  },
  {
    question: "Millisesse aega viib juhtumi uurimine?",
    answers: ["1918. aasta Tallinnasse", "1944. aasta Narva", "1985. aasta Tartu sügisesse", "2004. aasta Pärnusse", "Tuleviku Tartusse"],
    correct: 2,
    explanation: "Lugu põimib tänapäeva 1985. aasta Tartu sügisega."
  },
  {
    question: "Mis žanriga on teose puhul kõige rohkem tegemist?",
    answers: ["Luulekogu", "Krimilik noorteromaan", "Muinasjutt", "Ajalooõpik", "Näidend"],
    correct: 1,
    explanation: "Tiksoja on krimilik noorteromaan."
  },
  {
    question: "Mida Tanel uurimisel eriti teha püüab?",
    answers: ["Kõik vihjed unustada", "Mõelda nagu detektiiv", "Ainult nalja teha", "Metsast eemale hoida", "Teistele valetada"],
    correct: 1,
    explanation: "Tanelit seostatakse detektiivliku mõtlemisega."
  },
  {
    question: "Milline teema on loos oluline peale mõistatuse?",
    answers: ["Sõprus ja peresuhted", "Kosmoselend", "Kuninglik õukond", "Võidusõit", "Retseptid"],
    correct: 0,
    explanation: "Lugu käsitleb ka sõprust, vanemaid, koduseid probleeme ja tundeid."
  },
  {
    question: "Miks ei ole foto lihtsalt tavaline pilt?",
    answers: ["See on täiesti must", "Sellele jääb tüdruk, keda kohal ei nähtud", "See on tehtud vee all", "See näitab ainult kingi", "See kustub kohe ära"],
    correct: 1,
    explanation: "Fotole ilmub kummituslik tüdruku kuju, keda poisid pildistamise ajal ei märganud."
  },
  {
    question: "Mis teeb uuritava loo poiste jaoks eriti tõsiseks?",
    answers: ["See võib neid isiklikult puudutada", "See on ainult arvutimäng", "See toimub teises riigis", "See ei huvita kedagi", "See kestab ühe minuti"],
    correct: 0,
    explanation: "Uurimise käigus selgub, et mineviku lugu võib poisse isiklikult puudutada."
  },
  {
    question: "Millist ajastut aitab raamat noorele lugejale paremini ette kujutada?",
    answers: ["Viikingiaega", "Nõukogude aega Eestis", "Kiviaega", "Antiik-Roomat", "Tuleviku Marsi-kolooniat"],
    correct: 1,
    explanation: "1985. aasta Tartu kaudu näitab teos nõukogude aja eluolu."
  },
  {
    question: "Mida teeb see veebileht küsimustega, millele vastad valesti?",
    answers: ["Kustutab need kohe", "Salvestab need meelespeasse", "Muudab õigeks", "Saadab need automaatselt õpetajale", "Peidab kogu testi"],
    correct: 1,
    explanation: "Valesti vastatud küsimused salvestatakse meelespeasse, et saaksid neid uuesti harjutada."
  }
];

const wrongKey = "tiksojaWrongQuestions";

let currentIndex = 0;
let score = 0;
let activeQuestions = [...questions];
let answered = false;

const chapterList = document.getElementById("chapterList");
const characterGrid = document.getElementById("characterGrid");
const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");
const progressFill = document.getElementById("progressFill");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const feedbackText = document.getElementById("feedbackText");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const practiceWrongButton = document.getElementById("practiceWrongButton");
const clearWrongButton = document.getElementById("clearWrongButton");
const wrongList = document.getElementById("wrongList");

function getWrongItems() {
  try {
    return JSON.parse(localStorage.getItem(wrongKey)) || [];
  } catch {
    return [];
  }
}

function setWrongItems(items) {
  localStorage.setItem(wrongKey, JSON.stringify(items));
  renderWrongItems();
}

function addWrongItem(question, selectedIndex) {
  const items = getWrongItems();
  const entry = {
    question: question.question,
    selected: question.answers[selectedIndex],
    correct: question.answers[question.correct],
    explanation: question.explanation
  };

  const existingIndex = items.findIndex((item) => item.question === question.question);
  if (existingIndex >= 0) {
    items[existingIndex] = entry;
  } else {
    items.push(entry);
  }

  setWrongItems(items);
}

function removeWrongItem(question) {
  const items = getWrongItems().filter((item) => item.question !== question.question);
  setWrongItems(items);
}

function renderChapters() {
  chapterList.innerHTML = chapters.map((chapter, index) => `
    <article class="chapter">
      <button class="chapter-toggle" type="button" aria-expanded="false" aria-controls="chapter-${index}">
        <span>
          <span class="chapter-title">${chapter.title}</span>
          <span class="chapter-subtitle">Kokkuvõte, sündmused ja tegelased</span>
        </span>
        <span class="chapter-icon" aria-hidden="true">+</span>
      </button>
      <div class="chapter-body" id="chapter-${index}">
        <div>
          <h4>Kokkuvõte</h4>
          <p>${chapter.summary}</p>
        </div>
        <div>
          <h4>Olulisemad sündmused</h4>
          <ul>${chapter.events.map((event) => `<li>${event}</li>`).join("")}</ul>
          <h4>Tegelased peatükis</h4>
          <ul>${chapter.characters.map((character) => `<li>${character}</li>`).join("")}</ul>
        </div>
      </div>
    </article>
  `).join("");

  chapterList.querySelectorAll(".chapter").forEach((chapter) => {
    const button = chapter.querySelector(".chapter-toggle");
    button.addEventListener("click", () => {
      const isOpen = chapter.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderCharacters() {
  characterGrid.innerHTML = characters.map((character) => `
    <article class="character">
      <h3>${character.name}</h3>
      <span class="role">${character.role}</span>
      <p>${character.description}</p>
    </article>
  `).join("");
}

function renderQuestion() {
  const question = activeQuestions[currentIndex];
  answered = false;
  questionCounter.textContent = `${currentIndex + 1} / ${activeQuestions.length}`;
  scoreCounter.textContent = `${score} õiget`;
  progressFill.style.width = `${(currentIndex / activeQuestions.length) * 100}%`;
  questionText.textContent = question.question;
  feedbackText.className = "feedback hidden";
  feedbackText.textContent = "";
  nextButton.classList.add("hidden");

  answerList.innerHTML = question.answers.map((answer, index) => `
    <button class="answer" type="button" data-index="${index}">
      ${String.fromCharCode(65 + index)}. ${answer}
    </button>
  `).join("");

  answerList.querySelectorAll(".answer").forEach((button) => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.index)));
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;

  answered = true;
  const question = activeQuestions[currentIndex];
  const isCorrect = selectedIndex === question.correct;
  const buttons = [...answerList.querySelectorAll(".answer")];

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("wrong");
  });

  if (isCorrect) {
    score += 1;
    removeWrongItem(question);
    feedbackText.textContent = `Õige. ${question.explanation}`;
    feedbackText.className = "feedback good";
  } else {
    addWrongItem(question, selectedIndex);
    feedbackText.textContent = `Vale. ${question.explanation}`;
    feedbackText.className = "feedback bad";
  }

  scoreCounter.textContent = `${score} õiget`;
  nextButton.classList.remove("hidden");
}

function finishQuiz() {
  progressFill.style.width = "100%";
  questionCounter.textContent = `${activeQuestions.length} / ${activeQuestions.length}`;
  scoreCounter.textContent = `${score} õiget`;
  questionText.textContent = `Küsimustik on läbi. Sinu tulemus: ${score} / ${activeQuestions.length}.`;
  answerList.innerHTML = "";
  feedbackText.textContent = score === activeQuestions.length
    ? "Kõik vastused olid õiged."
    : "Vaata meelespead ja harjuta küsimusi, mis vajavad kordamist.";
  feedbackText.className = score === activeQuestions.length ? "feedback good" : "feedback bad";
  nextButton.classList.add("hidden");
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < activeQuestions.length) {
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function startQuiz(questionSet = questions) {
  activeQuestions = [...questionSet];
  currentIndex = 0;
  score = 0;

  if (!activeQuestions.length) {
    activeQuestions = [...questions];
  }

  renderQuestion();
}

function renderWrongItems() {
  const items = getWrongItems();

  if (!items.length) {
    practiceWrongButton.disabled = true;
    wrongList.innerHTML = "<p>Meelespeas ei ole praegu ühtegi valet vastust.</p>";
    return;
  }

  practiceWrongButton.disabled = false;
  wrongList.innerHTML = items.map((item) => `
    <article class="wrong-item">
      <h3>${item.question}</h3>
      <p><strong>Sinu viimane vastus:</strong> ${item.selected}</p>
      <p><strong>Õige vastus:</strong> ${item.correct}</p>
      <p>${item.explanation}</p>
    </article>
  `).join("");
}

function practiceWrongItems() {
  const savedQuestions = getWrongItems()
    .map((item) => questions.find((question) => question.question === item.question))
    .filter(Boolean);

  if (!savedQuestions.length) return;

  startQuiz(savedQuestions);
  document.getElementById("kusimustik").scrollIntoView({ behavior: "smooth" });
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", () => startQuiz());
practiceWrongButton.addEventListener("click", practiceWrongItems);
clearWrongButton.addEventListener("click", () => setWrongItems([]));

renderChapters();
renderCharacters();
renderWrongItems();
startQuiz();

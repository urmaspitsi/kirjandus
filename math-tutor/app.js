const LANGUAGE_STORAGE_KEY = "mathTutorLanguage";

const translations = {
  en: {
    htmlLang: "en",
    pageTitle: "Math Tutor",
    heroEyebrow: "Math Tutor",
    heroTitle: "Let's practice arithmetics.",
    heroIntro:
      "Start with multiplication, decimals, and fractions. Pick a skill, solve one question at a time, and track how many you get right in a row.",
    languageLabel: "Language",
    topicListLabel: "Math topics",
    practiceModesTitle: "Practice Modes",
    learningTipTitle: "Learning Tip",
    lessonTitle: "Step By Step",
    solutionTitle: "Step By Step Solution",
    showSolutionButton: "Show Solution",
    hideSolutionButton: "Hide Solution",
    currentSkillLabel: "Current Skill",
    correctLabel: "Correct",
    streakLabel: "Streak",
    questionLabel: "Question",
    answerInputLabel: "Your answer",
    answerPlaceholder: "Type your answer",
    checkAnswerButton: "Check Answer",
    newQuestionButton: "New Question",
    topics: {
      multiplication: {
        title: "Multiplication",
        description: "Practice quick multiplication facts with whole numbers.",
        tip: "Break hard facts apart. For 7 x 8, think 7 x 4 and double it.",
      },
      decimals: {
        title: "Decimals",
        description: "Add and subtract simple decimals used in daily life.",
        tip: "Line up place values carefully so tenths stay under tenths and hundredths stay under hundredths.",
      },
      "decimal-multiplication": {
        title: "Multiplying Decimals",
        description: "Multiply simple decimal numbers such as 0.4 x 0.8.",
        tip: "First multiply the digits as whole numbers, then place the decimal point so the total number of decimal places stays correct.",
        lesson: {
          example: "Example: 0.4 x 0.8",
          steps: [
            "Ignore the decimal points for a moment and multiply 4 x 8 = 32.",
            "Count the decimal places in the factors. 0.4 has one and 0.8 has one, so there are two decimal places altogether.",
            "Place the decimal point in 32 so the answer has two decimal places: 0.32.",
            "Final answer: 0.4 x 0.8 = 0.32.",
          ],
        },
      },
      "reduce-fractions": {
        title: "Reduce Fractions",
        description: "Reduce simple fractions and practice equivalent values.",
        tip: "Look for common factors in the top and bottom, then divide both by the same number.",
      },
      "add-fractions": {
        title: "Add Fractions",
        description: "Add simple fractions and simplify the final answer.",
        tip: "Find a common denominator, add the numerators, then reduce the result fully.",
      },
      "subtract-fractions": {
        title: "Subtract Fractions",
        description: "Subtract simple fractions and simplify the final answer.",
        tip: "Use a common denominator, subtract the numerators, then reduce the answer.",
      },
    },
    hints: {
      wholeNumber: "Enter a whole number.",
      oneDecimal: "Write your answer with one decimal place.",
      decimalNumber: "Write your answer as a decimal number.",
      fraction34: "Type your answer like 3/4.",
      fraction56: "Type your answer like 5/6.",
      fraction14: "Type your answer like 1/4.",
    },
    simplifyPrompt: "Simplify",
    messages: {
      enterAnswer: "Enter an answer before checking it.",
      correct: "Correct.",
      almostThere: "Almost there.",
      equivalentButReduce: "is equivalent, but reduce it further to",
      notQuite: "Not quite.",
      skipped: "Skipped. Here is a new question.",
    },
  },
  et: {
    htmlLang: "et",
    pageTitle: "Matemaatikaõpetaja",
    heroEyebrow: "Matemaatikaõpetaja",
    heroTitle: "Harjutame arvutamist.",
    heroIntro:
      "Alusta korrutamise, kümnendmurdude ja harilike murdudega. Vali teema, lahenda üks ülesanne korraga ning jälgi, mitu õiget vastust saad järjest.",
    languageLabel: "Keel",
    topicListLabel: "Matemaatika teemad",
    practiceModesTitle: "Harjutamise viisid",
    learningTipTitle: "Õpinipp",
    lessonTitle: "Samm-sammult",
    solutionTitle: "Samm-sammuline lahendus",
    showSolutionButton: "Näita lahendust",
    hideSolutionButton: "Peida lahendus",
    currentSkillLabel: "Praegune teema",
    correctLabel: "Õigeid",
    streakLabel: "Järjest",
    questionLabel: "Ülesanne",
    answerInputLabel: "Sinu vastus",
    answerPlaceholder: "Sisesta vastus",
    checkAnswerButton: "Kontrolli vastust",
    newQuestionButton: "Uus ülesanne",
    topics: {
      multiplication: {
        title: "Korrutamine",
        description: "Harjuta peast kiireid korrutamistehteid täisarvudega.",
        tip: "Jaga keerulisem tehe osadeks. Näiteks 7 x 8 asemel mõtle 7 x 4 ja korruta tulemus kahega.",
      },
      decimals: {
        title: "Kümnendmurrud",
        description: "Liida ja lahuta lihtsaid kümnendmurde igapäevastest näidetest.",
        tip: "Aseta kohaväärtused kohakuti, et kümnendikud ja sajandikud oleksid õigetes veergudes.",
      },
      "decimal-multiplication": {
        title: "Kümnendmurdude korrutamine",
        description: "Korruta lihtsaid kümnendmurde, näiteks 0.4 x 0.8.",
        tip: "Korruta esmalt numbrid nagu täisarvud ning pane siis koma nii, et komakohtade koguarv jääks õigeks.",
        lesson: {
          example: "Näide: 0.4 x 0.8",
          steps: [
            "Esmalt jäta komad hetkeks kõrvale ja korruta 4 x 8 = 32.",
            "Loenda, mitu kohta on komast paremal. Arvus 0.4 on üks ja arvus 0.8 on üks, kokku kaks komakohta.",
            "Pane arvus 32 koma nii, et vastuses oleks kaks komakohta: 0.32.",
            "Lõppvastus: 0.4 x 0.8 = 0.32.",
          ],
        },
      },
      "reduce-fractions": {
        title: "Murru taandamine",
        description: "Taanda lihtsaid murde ja harjuta samaväärseid väärtusi.",
        tip: "Otsi lugejas ja nimetajas ühistegureid ning jaga mõlemad sama arvuga.",
      },
      "add-fractions": {
        title: "Murdude liitmine",
        description: "Liida lihtsaid murde ja taanda lõpptulemus.",
        tip: "Leia ühine nimetaja, liida lugejad ja taanda tulemus täielikult.",
      },
      "subtract-fractions": {
        title: "Murdude lahutamine",
        description: "Lahuta lihtsaid murde ja taanda lõpptulemus.",
        tip: "Kasuta ühist nimetajat, lahuta lugejad ja taanda vastus.",
      },
    },
    hints: {
      wholeNumber: "Sisesta täisarv.",
      oneDecimal: "Kirjuta vastus ühe komakohaga.",
      decimalNumber: "Kirjuta vastus kümnendarvuna.",
      fraction34: "Sisesta vastus kujul 3/4.",
      fraction56: "Sisesta vastus kujul 5/6.",
      fraction14: "Sisesta vastus kujul 1/4.",
    },
    simplifyPrompt: "Taanda",
    messages: {
      enterAnswer: "Sisesta enne kontrollimist vastus.",
      correct: "Õige.",
      almostThere: "Peaaegu õige.",
      equivalentButReduce: "on samaväärne, kuid taanda see kujule",
      notQuite: "Veel mitte.",
      skipped: "Jätsid vahele. Siin on uus ülesanne.",
    },
  },
};

const languageOptions = [
  { id: "en", label: "English" },
  { id: "et", label: "Eesti" },
];

const topicDefinitions = [
  {
    id: "multiplication",
    generateQuestion() {
      const left = randomInt(2, 12);
      const right = randomInt(2, 12);
      return {
        prompt: {
          en: `${left} x ${right}`,
          et: `${left} x ${right}`,
        },
        hintKey: "wholeNumber",
        answer: String(left * right),
        explanation: {
          en: `${left} x ${right} = ${left * right}.`,
          et: `${left} x ${right} = ${left * right}.`,
        },
        solutionSteps: {
          en: [
            `Multiply the numbers: ${left} x ${right}.`,
            `${left} groups of ${right} make ${left * right}.`,
            `Answer: ${left * right}.`,
          ],
          et: [
            `Korruta arvud: ${left} x ${right}.`,
            `${left} rühma, igas ${right}, annab kokku ${left * right}.`,
            `Vastus: ${left * right}.`,
          ],
        },
      };
    },
  },
  {
    id: "decimals",
    generateQuestion() {
      if (Math.random() < 0.5) {
        const left = (randomInt(12, 95) / 10).toFixed(1);
        const right = (randomInt(11, 89) / 10).toFixed(1);
        const answer = (Number(left) + Number(right)).toFixed(1);
        return {
          prompt: {
            en: `${left} + ${right}`,
            et: `${left} + ${right}`,
          },
          hintKey: "oneDecimal",
          answer,
          explanation: {
            en: `${left} + ${right} = ${answer}.`,
            et: `${left} + ${right} = ${answer}.`,
          },
          solutionSteps: {
            en: [
              `Line up the tenths: ${left} + ${right}.`,
              `Add the decimal numbers directly: ${left} + ${right} = ${answer}.`,
              `Answer: ${answer}.`,
            ],
            et: [
              `Aseta kümnendikud kohakuti: ${left} + ${right}.`,
              `Liida kümnendarvud otse: ${left} + ${right} = ${answer}.`,
              `Vastus: ${answer}.`,
            ],
          },
        };
      }

      const leftValue = randomInt(25, 95) / 10;
      const rightValue = randomInt(11, Math.floor(leftValue * 10) - 1) / 10;
      const left = leftValue.toFixed(1);
      const right = rightValue.toFixed(1);
      const answer = (leftValue - rightValue).toFixed(1);
      return {
        prompt: {
          en: `${left} - ${right}`,
          et: `${left} - ${right}`,
        },
        hintKey: "oneDecimal",
        answer,
        explanation: {
          en: `${left} - ${right} = ${answer}.`,
          et: `${left} - ${right} = ${answer}.`,
        },
        solutionSteps: {
          en: [
            `Line up the tenths: ${left} - ${right}.`,
            `Subtract the decimal numbers directly: ${left} - ${right} = ${answer}.`,
            `Answer: ${answer}.`,
          ],
          et: [
            `Aseta kümnendikud kohakuti: ${left} - ${right}.`,
            `Lahuta kümnendarvud otse: ${left} - ${right} = ${answer}.`,
            `Vastus: ${answer}.`,
          ],
        },
      };
    },
  },
  {
    id: "decimal-multiplication",
    generateQuestion() {
      const left = (randomInt(1, 9) / 10).toFixed(1);
      const right = (randomInt(1, 9) / 10).toFixed(1);
      const leftWhole = Number(left) * 10;
      const rightWhole = Number(right) * 10;
      const wholeProduct = leftWhole * rightWhole;
      const answer = formatDecimalAnswer(Number(left) * Number(right));

      return {
        prompt: {
          en: `${left} x ${right}`,
          et: `${left} x ${right}`,
        },
        hintKey: "decimalNumber",
        answer,
        explanation: {
          en: `${left} x ${right} = ${answer}.`,
          et: `${left} x ${right} = ${answer}.`,
        },
        solutionSteps: {
          en: [
            `Ignore the decimal points first and multiply ${leftWhole} x ${rightWhole} = ${wholeProduct}.`,
            `${left} has one decimal place and ${right} has one decimal place, so the answer must have two decimal places.`,
            `Write ${wholeProduct} with two decimal places: ${answer}.`,
            `Answer: ${left} x ${right} = ${answer}.`,
          ],
          et: [
            `Jäta komad esmalt kõrvale ja korruta ${leftWhole} x ${rightWhole} = ${wholeProduct}.`,
            `${left} sisaldab üht komakohta ja ${right} sisaldab üht komakohta, seega peab vastuses olema kokku kaks komakohta.`,
            `Kirjuta ${wholeProduct} kahe komakohaga: ${answer}.`,
            `Vastus: ${left} x ${right} = ${answer}.`,
          ],
        },
      };
    },
  },
  {
    id: "reduce-fractions",
    generateQuestion() {
      let baseNumerator = randomInt(1, 8);
      let baseDenominator = randomInt(baseNumerator + 1, 10);

      while (greatestCommonDivisor(baseNumerator, baseDenominator) !== 1) {
        baseNumerator = randomInt(1, 8);
        baseDenominator = randomInt(baseNumerator + 1, 10);
      }

      const multiplier = randomInt(2, 4);
      const numerator = baseNumerator * multiplier;
      const denominator = baseDenominator * multiplier;
      return {
        prompt: {
          en: `${translations.en.simplifyPrompt} ${numerator}/${denominator}`,
          et: `${translations.et.simplifyPrompt} ${numerator}/${denominator}`,
        },
        hintKey: "fraction34",
        answer: `${baseNumerator}/${baseDenominator}`,
        explanation: {
          en: `${numerator}/${denominator} simplifies to ${baseNumerator}/${baseDenominator}.`,
          et: `${numerator}/${denominator} taandub kujule ${baseNumerator}/${baseDenominator}.`,
        },
        solutionSteps: {
          en: [
            `Find a common factor of ${numerator} and ${denominator}.`,
            `Both numbers divide by ${multiplier}.`,
            `${numerator} / ${multiplier} = ${baseNumerator} and ${denominator} / ${multiplier} = ${baseDenominator}.`,
            `Answer: ${baseNumerator}/${baseDenominator}.`,
          ],
          et: [
            `Leia arvude ${numerator} ja ${denominator} ühistegur.`,
            `Mõlemad arvud jaguvad arvuga ${multiplier}.`,
            `${numerator} / ${multiplier} = ${baseNumerator} ja ${denominator} / ${multiplier} = ${baseDenominator}.`,
            `Vastus: ${baseNumerator}/${baseDenominator}.`,
          ],
        },
      };
    },
  },
  {
    id: "add-fractions",
    generateQuestion() {
      const left = buildFractionOperands();
      const right = buildFractionOperands();
      const numerator = left.numerator * right.denominator + right.numerator * left.denominator;
      const denominator = left.denominator * right.denominator;
      const simplified = simplifyFraction(numerator, denominator);
      const result = formatFraction(simplified);
      return {
        prompt: {
          en: `${left.numerator}/${left.denominator} + ${right.numerator}/${right.denominator}`,
          et: `${left.numerator}/${left.denominator} + ${right.numerator}/${right.denominator}`,
        },
        hintKey: "fraction56",
        answer: result,
        explanation: {
          en: `${left.numerator}/${left.denominator} + ${right.numerator}/${right.denominator} = ${result}.`,
          et: `${left.numerator}/${left.denominator} + ${right.numerator}/${right.denominator} = ${result}.`,
        },
        solutionSteps: {
          en: [
            `Use the common denominator ${left.denominator * right.denominator}.`,
            `Convert and add numerators: ${left.numerator} x ${right.denominator} + ${right.numerator} x ${left.denominator} = ${numerator}.`,
            `This gives ${numerator}/${denominator}.`,
            `Simplify to ${result}.`,
          ],
          et: [
            `Kasuta ühist nimetajat ${left.denominator * right.denominator}.`,
            `Teisenda ja liida lugejad: ${left.numerator} x ${right.denominator} + ${right.numerator} x ${left.denominator} = ${numerator}.`,
            `Saad murru ${numerator}/${denominator}.`,
            `Taanda kujule ${result}.`,
          ],
        },
      };
    },
  },
  {
    id: "subtract-fractions",
    generateQuestion() {
      let left = buildFractionOperands();
      let right = buildFractionOperands();
      let leftValue = left.numerator / left.denominator;
      let rightValue = right.numerator / right.denominator;

      while (leftValue <= rightValue) {
        left = buildFractionOperands();
        right = buildFractionOperands();
        leftValue = left.numerator / left.denominator;
        rightValue = right.numerator / right.denominator;
      }

      const numerator = left.numerator * right.denominator - right.numerator * left.denominator;
      const denominator = left.denominator * right.denominator;
      const simplified = simplifyFraction(numerator, denominator);
      const result = formatFraction(simplified);
      return {
        prompt: {
          en: `${left.numerator}/${left.denominator} - ${right.numerator}/${right.denominator}`,
          et: `${left.numerator}/${left.denominator} - ${right.numerator}/${right.denominator}`,
        },
        hintKey: "fraction14",
        answer: result,
        explanation: {
          en: `${left.numerator}/${left.denominator} - ${right.numerator}/${right.denominator} = ${result}.`,
          et: `${left.numerator}/${left.denominator} - ${right.numerator}/${right.denominator} = ${result}.`,
        },
        solutionSteps: {
          en: [
            `Use the common denominator ${left.denominator * right.denominator}.`,
            `Convert and subtract numerators: ${left.numerator} x ${right.denominator} - ${right.numerator} x ${left.denominator} = ${numerator}.`,
            `This gives ${numerator}/${denominator}.`,
            `Simplify to ${result}.`,
          ],
          et: [
            `Kasuta ühist nimetajat ${left.denominator * right.denominator}.`,
            `Teisenda ja lahuta lugejad: ${left.numerator} x ${right.denominator} - ${right.numerator} x ${left.denominator} = ${numerator}.`,
            `Saad murru ${numerator}/${denominator}.`,
            `Taanda kujule ${result}.`,
          ],
        },
      };
    },
  },
];

const state = {
  language: getSavedLanguage(),
  activeTopicId: topicDefinitions[0].id,
  correct: 0,
  streak: 0,
  question: null,
  showSolution: false,
};

const heroEyebrow = document.getElementById("hero-eyebrow");
const heroTitle = document.getElementById("hero-title");
const heroIntro = document.getElementById("hero-intro");
const languagePickerLabel = document.getElementById("language-picker-label");
const languageOptionsContainer = document.getElementById("language-options");
const practiceModesTitle = document.getElementById("practice-modes-title");
const topicList = document.getElementById("topic-list");
const learningTipTitle = document.getElementById("learning-tip-title");
const topicTip = document.getElementById("topic-tip");
const lessonCard = document.getElementById("lesson-card");
const lessonTitle = document.getElementById("lesson-title");
const lessonExample = document.getElementById("lesson-example");
const lessonSteps = document.getElementById("lesson-steps");
const currentSkillLabel = document.getElementById("current-skill-label");
const currentTopic = document.getElementById("current-topic");
const correctLabel = document.getElementById("correct-label");
const correctCount = document.getElementById("correct-count");
const streakLabel = document.getElementById("streak-label");
const streakCount = document.getElementById("streak-count");
const questionLabel = document.getElementById("question-label");
const questionText = document.getElementById("question-text");
const questionHint = document.getElementById("question-hint");
const feedback = document.getElementById("feedback");
const solutionCard = document.getElementById("solution-card");
const solutionTitle = document.getElementById("solution-title");
const solutionSteps = document.getElementById("solution-steps");
const toggleSolutionButton = document.getElementById("toggle-solution-button");
const answerForm = document.getElementById("answer-form");
const answerInputLabel = document.getElementById("answer-input-label");
const answerInput = document.getElementById("answer-input");
const checkAnswerButton = document.getElementById("check-answer-button");
const skipButton = document.getElementById("skip-button");

function getSavedLanguage() {
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved && translations[saved] ? saved : "et";
}

function translate(key) {
  return translations[state.language][key];
}

function getTopicCopy(topicId) {
  return translations[state.language].topics[topicId];
}

function getActiveTopic() {
  return topicDefinitions.find((topic) => topic.id === state.activeTopicId);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function greatestCommonDivisor(a, b) {
  let left = Math.abs(a);
  let right = Math.abs(b);

  while (right !== 0) {
    const remainder = left % right;
    left = right;
    right = remainder;
  }

  return left;
}

function simplifyFraction(numerator, denominator) {
  const divisor = greatestCommonDivisor(numerator, denominator);
  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor,
  };
}

function formatFraction(fraction) {
  return `${fraction.numerator}/${fraction.denominator}`;
}

function buildFractionOperands() {
  let numerator = randomInt(1, 8);
  let denominator = randomInt(numerator + 1, 10);

  while (greatestCommonDivisor(numerator, denominator) !== 1) {
    numerator = randomInt(1, 8);
    denominator = randomInt(numerator + 1, 10);
  }

  return { numerator, denominator };
}

function renderLanguageOptions() {
  languageOptionsContainer.innerHTML = "";

  for (const option of languageOptions) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `language-option${option.id === state.language ? " active" : ""}`;
    button.textContent = option.label;
    button.setAttribute("aria-pressed", option.id === state.language ? "true" : "false");
    button.addEventListener("click", () => {
      if (state.language === option.id) {
        return;
      }

      state.language = option.id;
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, state.language);
      applyTranslations();
      renderTopics();
      updateStats();
      refreshQuestion();
      setFeedback("");
    });
    languageOptionsContainer.appendChild(button);
  }
}

function applyTranslations() {
  const copy = translations[state.language];

  document.documentElement.lang = copy.htmlLang;
  document.title = copy.pageTitle;
  heroEyebrow.textContent = copy.heroEyebrow;
  heroTitle.textContent = copy.heroTitle;
  heroIntro.textContent = copy.heroIntro;
  languagePickerLabel.textContent = copy.languageLabel;
  practiceModesTitle.textContent = copy.practiceModesTitle;
  topicList.setAttribute("aria-label", copy.topicListLabel);
  learningTipTitle.textContent = copy.learningTipTitle;
  lessonTitle.textContent = copy.lessonTitle;
  solutionTitle.textContent = copy.solutionTitle;
  currentSkillLabel.textContent = copy.currentSkillLabel;
  correctLabel.textContent = copy.correctLabel;
  streakLabel.textContent = copy.streakLabel;
  questionLabel.textContent = copy.questionLabel;
  answerInputLabel.textContent = copy.answerInputLabel;
  answerInput.placeholder = copy.answerPlaceholder;
  checkAnswerButton.textContent = copy.checkAnswerButton;
  skipButton.textContent = copy.newQuestionButton;
  updateSolutionButton();

  renderLanguageOptions();
}

function renderTopics() {
  topicList.innerHTML = "";

  for (const topic of topicDefinitions) {
    const topicCopy = getTopicCopy(topic.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topic-button${topic.id === state.activeTopicId ? " active" : ""}`;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", topic.id === state.activeTopicId ? "true" : "false");
    button.innerHTML = `
      <span class="topic-title">${topicCopy.title}</span>
      <span class="topic-description">${topicCopy.description}</span>
    `;
    button.addEventListener("click", () => {
      state.activeTopicId = topic.id;
      state.streak = 0;
      state.showSolution = false;
      updateStats();
      setFeedback("");
      renderTopics();
      nextQuestion();
    });
    topicList.appendChild(button);
  }
}

function updateStats() {
  const topicCopy = getTopicCopy(state.activeTopicId);
  currentTopic.textContent = topicCopy.title;
  correctCount.textContent = String(state.correct);
  streakCount.textContent = String(state.streak);
  topicTip.textContent = topicCopy.tip;
  renderLesson(topicCopy.lesson);
}

function renderLesson(lesson) {
  if (!lesson) {
    lessonCard.hidden = true;
    lessonExample.textContent = "";
    lessonSteps.innerHTML = "";
    return;
  }

  lessonCard.hidden = false;
  lessonExample.textContent = lesson.example;
  lessonSteps.innerHTML = "";

  for (const step of lesson.steps) {
    const item = document.createElement("li");
    item.textContent = step;
    lessonSteps.appendChild(item);
  }
}

function setFeedback(message, type = "") {
  feedback.textContent = message;
  feedback.className = "feedback";
  if (type) {
    feedback.classList.add(type);
  }
}

function normalizeAnswer(value) {
  return value.trim().replace(/\s+/g, "").toLowerCase().replace(",", ".");
}

function parseDecimal(value) {
  const normalized = normalizeAnswer(value);
  if (!/^-?(?:\d+\.?\d*|\.\d+)$/.test(normalized)) {
    return null;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatDecimalAnswer(value) {
  return value.toFixed(2).replace(/\.?0+$/, "");
}

function parseFraction(value) {
  const match = normalizeAnswer(value).match(/^(-?\d+)\/(-?\d+)$/);
  if (!match) {
    return null;
  }

  const numerator = Number(match[1]);
  const denominator = Number(match[2]);

  if (denominator === 0) {
    return null;
  }

  return { numerator, denominator };
}

function isEquivalentFraction(left, right) {
  return left.numerator * right.denominator === right.numerator * left.denominator;
}

function isFullyReducedFraction(fraction) {
  return greatestCommonDivisor(fraction.numerator, fraction.denominator) === 1;
}

function updateSolutionButton() {
  toggleSolutionButton.textContent = state.showSolution
    ? translate("hideSolutionButton")
    : translate("showSolutionButton");
}

function renderSolution() {
  if (!state.question || !state.question.solutionSteps) {
    solutionCard.hidden = true;
    solutionSteps.innerHTML = "";
    return;
  }

  solutionCard.hidden = false;
  updateSolutionButton();
  solutionSteps.hidden = !state.showSolution;
  solutionSteps.innerHTML = "";

  if (!state.showSolution) {
    return;
  }

  for (const step of state.question.solutionSteps[state.language]) {
    const item = document.createElement("li");
    item.textContent = step;
    solutionSteps.appendChild(item);
  }
}

function refreshQuestion() {
  if (!state.question) {
    return;
  }

  questionText.textContent = state.question.prompt[state.language];
  questionHint.textContent = translations[state.language].hints[state.question.hintKey];
  renderSolution();
}

function nextQuestion() {
  const topic = getActiveTopic();
  state.question = topic.generateQuestion();
  state.showSolution = false;
  refreshQuestion();
  answerInput.value = "";
  answerInput.focus();
}

function checkAnswer(event) {
  event.preventDefault();
  const userAnswer = normalizeAnswer(answerInput.value);

  if (!userAnswer) {
    setFeedback(translate("messages").enterAnswer, "error");
    return;
  }

  const expected = normalizeAnswer(state.question.answer);
  const userFraction = parseFraction(userAnswer);
  const expectedFraction = parseFraction(expected);
  const userDecimal = parseDecimal(userAnswer);
  const expectedDecimal = parseDecimal(expected);
  const messages = translate("messages");
  const explanation = state.question.explanation[state.language];

  if (userAnswer === expected) {
    state.correct += 1;
    state.streak += 1;
    updateStats();
    setFeedback(`${messages.correct} ${explanation}`, "success");
    nextQuestion();
    return;
  }

  if (
    (state.activeTopicId === "decimals" || state.activeTopicId === "decimal-multiplication") &&
    userDecimal !== null &&
    expectedDecimal !== null &&
    Math.abs(userDecimal - expectedDecimal) < 1e-9
  ) {
    state.correct += 1;
    state.streak += 1;
    updateStats();
    setFeedback(`${messages.correct} ${explanation}`, "success");
    nextQuestion();
    return;
  }

  if (
    (
      state.activeTopicId === "reduce-fractions" ||
      state.activeTopicId === "add-fractions" ||
      state.activeTopicId === "subtract-fractions"
    ) &&
    userFraction &&
    expectedFraction &&
    isEquivalentFraction(userFraction, expectedFraction) &&
    !isFullyReducedFraction(userFraction)
  ) {
    state.streak = 0;
    updateStats();
    setFeedback(
      `${messages.almostThere} ${userAnswer} ${messages.equivalentButReduce} ${state.question.answer}.`,
      "error"
    );
    return;
  }

  state.streak = 0;
  updateStats();
  setFeedback(`${messages.notQuite} ${explanation}`, "error");
}

answerForm.addEventListener("submit", checkAnswer);
toggleSolutionButton.addEventListener("click", () => {
  state.showSolution = !state.showSolution;
  renderSolution();
});
skipButton.addEventListener("click", () => {
  setFeedback(translate("messages").skipped);
  nextQuestion();
});

applyTranslations();
renderTopics();
updateStats();
nextQuestion();

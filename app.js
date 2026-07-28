const vocab = [
    // Saludos
    { es: "Hola", en: "Hello; Hi", cat: "Saludos" },
    { es: "Buenos días", en: "Good morning", cat: "Saludos" },
    { es: "Buenas tardes", en: "Good afternoon", cat: "Saludos" },
    { es: "Buenas noches", en: "Good evening; Good night", cat: "Saludos" },
    // Despedidas
    { es: "Adiós", en: "Goodbye", cat: "Despedidas" },
    { es: "Nos vemos", en: "See you", cat: "Despedidas" },
    { es: "Hasta luego", en: "See you later", cat: "Despedidas" },
    { es: "Hasta la vista", en: "See you later", cat: "Despedidas" },
    { es: "Hasta pronto", en: "See you soon", cat: "Despedidas" },
    { es: "Hasta mañana", en: "See you tomorrow", cat: "Despedidas" },
    { es: "Saludos a...", en: "Greetings to...", cat: "Despedidas" },
    { es: "Chau", en: "Bye", cat: "Despedidas" },
    // Cómo está
    { es: "¿Cómo está usted?", en: "How are you? (formal)", cat: "Cómo está" },
    { es: "¿Cómo estás?", en: "How are you? (familiar)", cat: "Cómo está" },
    { es: "¿Qué hay de nuevo?", en: "What's new?", cat: "Cómo está" },
    { es: "¿Qué pasa?", en: "What's happening?; What's going on?", cat: "Cómo está" },
    { es: "¿Qué tal?", en: "How are you?; How is it going?", cat: "Cómo está" },
    { es: "Muy bien, gracias", en: "Very well, thanks", cat: "Cómo está" },
    { es: "Nada", en: "Nothing", cat: "Cómo está" },
    { es: "No muy bien", en: "Not very well", cat: "Cómo está" },
    { es: "Regular", en: "So-so; OK", cat: "Cómo está" },
    // Cortesía
    { es: "Con permiso", en: "Pardon me; Excuse me", cat: "Cortesía" },
    { es: "De nada", en: "You're welcome", cat: "Cortesía" },
    { es: "Lo siento", en: "I'm sorry", cat: "Cortesía" },
    { es: "Muchas gracias", en: "Thank you very much; Thanks a lot", cat: "Cortesía" },
    { es: "No hay de qué", en: "You're welcome", cat: "Cortesía" },
    { es: "Perdón", en: "Pardon me; Excuse me", cat: "Cortesía" },
    { es: "Por favor", en: "Please", cat: "Cortesía" },
    // Títulos
    { es: "Señor (Sr.)", en: "Mr.; Sir", cat: "Títulos" },
    { es: "Señora (Sra.)", en: "Mrs.; Ma'am", cat: "Títulos" },
    { es: "Señorita (Srta.)", en: "Miss", cat: "Títulos" },
    // Presentaciones
    { es: "¿Cómo se llama usted?", en: "What's your name? (formal)", cat: "Presentaciones" },
    { es: "¿Cómo te llamas?", en: "What's your name? (familiar)", cat: "Presentaciones" },
    { es: "Me llamo...", en: "My name is...", cat: "Presentaciones" },
    { es: "¿Y usted?", en: "And you? (formal)", cat: "Presentaciones" },
    { es: "¿Y tú?", en: "And you? (familiar)", cat: "Presentaciones" },
    { es: "Mucho gusto", en: "Pleased to meet you", cat: "Presentaciones" },
    { es: "El gusto es mío", en: "The pleasure is mine", cat: "Presentaciones" },
    { es: "Encantado/a", en: "Delighted; Pleased to meet you", cat: "Presentaciones" },
    { es: "Igualmente", en: "Likewise", cat: "Presentaciones" },
    { es: "Éste/Ésta es...", en: "This is...", cat: "Presentaciones" },
    { es: "Le presento a...", en: "I would like to introduce you to... (formal)", cat: "Presentaciones" },
    { es: "Te presento a...", en: "I would like to introduce you to... (familiar)", cat: "Presentaciones" },
    { es: "El nombre", en: "Name", cat: "Presentaciones" },
    // De dónde es
    { es: "¿De dónde es usted?", en: "Where are you from? (formal)", cat: "De dónde es" },
    { es: "¿De dónde eres?", en: "Where are you from? (familiar)", cat: "De dónde es" },
    { es: "Soy de...", en: "I'm from...", cat: "De dónde es" },
    // Adicionales
    { es: "¿Cuánto(s)/a(s)?", en: "How much?; How many?", cat: "Adicionales" },
    { es: "¿De quién...?", en: "Whose...? (singular)", cat: "Adicionales" },
    { es: "¿De quiénes...?", en: "Whose...? (plural)", cat: "Adicionales" },
    { es: "Hay", en: "There is; There are", cat: "Adicionales" },
    { es: "No hay", en: "There is not; There are not", cat: "Adicionales" },
    // Verbos
    { es: "Ser", en: "To be", cat: "Verbos" },
    // Sustantivos
    { es: "El autobús", en: "Bus", cat: "Sustantivos" },
    { es: "La capital", en: "Capital city", cat: "Sustantivos" },
    { es: "El chico", en: "Boy", cat: "Sustantivos" },
    { es: "La chica", en: "Girl", cat: "Sustantivos" },
    { es: "La computadora", en: "Computer", cat: "Sustantivos" },
    { es: "La comunidad", en: "Community", cat: "Sustantivos" },
    { es: "El/la conductor(a)", en: "Driver", cat: "Sustantivos" },
    { es: "La conversación", en: "Conversation", cat: "Sustantivos" },
    { es: "La cosa", en: "Thing", cat: "Sustantivos" },
    { es: "El cuaderno", en: "Notebook", cat: "Sustantivos" },
    { es: "El día", en: "Day", cat: "Sustantivos" },
    { es: "El diario", en: "Diary", cat: "Sustantivos" },
    { es: "El diccionario", en: "Dictionary", cat: "Sustantivos" },
    { es: "La escuela", en: "School", cat: "Sustantivos" },
    { es: "El/la estudiante", en: "Student", cat: "Sustantivos" },
    { es: "La foto(grafía)", en: "Photograph", cat: "Sustantivos" },
    { es: "El hombre", en: "Man", cat: "Sustantivos" },
    { es: "El/la joven", en: "Youth; Young person", cat: "Sustantivos" },
    { es: "El lápiz", en: "Pencil", cat: "Sustantivos" },
    { es: "La lección", en: "Lesson", cat: "Sustantivos" },
    { es: "La maleta", en: "Suitcase", cat: "Sustantivos" },
    { es: "La mano", en: "Hand", cat: "Sustantivos" },
    { es: "El mapa", en: "Map", cat: "Sustantivos" },
    { es: "La mujer", en: "Woman", cat: "Sustantivos" },
    { es: "La nacionalidad", en: "Nationality", cat: "Sustantivos" },
    { es: "El número", en: "Number", cat: "Sustantivos" },
    { es: "El país", en: "Country", cat: "Sustantivos" },
    { es: "La palabra", en: "Word", cat: "Sustantivos" },
    { es: "El/la pasajero/a", en: "Passenger", cat: "Sustantivos" },
    { es: "El problema", en: "Problem", cat: "Sustantivos" },
    { es: "El/la profesor(a)", en: "Teacher", cat: "Sustantivos" },
    { es: "El programa", en: "Program", cat: "Sustantivos" },
    { es: "El/la turista", en: "Tourist", cat: "Sustantivos" },
    { es: "El video", en: "Video", cat: "Sustantivos" },
    // Países
    { es: "Argentina", en: "Argentina", cat: "Países" },
    { es: "Canadá", en: "Canada", cat: "Países" },
    { es: "Costa Rica", en: "Costa Rica", cat: "Países" },
    { es: "Cuba", en: "Cuba", cat: "Países" },
    { es: "Ecuador", en: "Ecuador", cat: "Países" },
    { es: "España", en: "Spain", cat: "Países" },
    { es: "Estados Unidos (EE.UU.)", en: "United States", cat: "Países" },
    { es: "México", en: "Mexico", cat: "Países" },
    { es: "Puerto Rico", en: "Puerto Rico", cat: "Países" },
];

// ============ STATE ============
let currentCards = [...vocab];
let currentIndex = 0;
let direction = "en-es";
let mode = "flashcard"; // "flashcard" or "quiz"

// Flashcard state
let knownSet = new Set();
let learningSet = new Set();

// Quiz state
let quizCorrect = 0;
let quizWrong = 0;
let quizAnswered = false;

// ============ DOM ============
const card = document.getElementById("card");
const frontWord = document.getElementById("frontWord");
const backWord = document.getElementById("backWord");
const frontCategory = document.getElementById("frontCategory");
const backCategory = document.getElementById("backCategory");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const scoreKnow = document.getElementById("scoreKnow");
const scoreDont = document.getElementById("scoreDont");
const categoryFilter = document.getElementById("categoryFilter");
const btnShuffle = document.getElementById("btnShuffle");
const btnDirection = document.getElementById("btnDirection");
const btnReset = document.getElementById("btnReset");

const flashcardMode = document.getElementById("flashcardMode");
const quizModeEl = document.getElementById("quizMode");
const tabFlashcard = document.getElementById("tabFlashcard");
const tabQuiz = document.getElementById("tabQuiz");

const quizWord = document.getElementById("quizWord");
const quizCategory = document.getElementById("quizCategory");
const quizInput = document.getElementById("quizInput");
const quizSubmit = document.getElementById("quizSubmit");
const quizFeedback = document.getElementById("quizFeedback");
const quizFeedbackText = document.getElementById("quizFeedbackText");
const quizCorrectAnswer = document.getElementById("quizCorrectAnswer");
const quizRightEl = document.getElementById("quizRight");
const quizWrongEl = document.getElementById("quizWrong");
const btnMic = document.getElementById("btnMic");
const speechStatus = document.getElementById("speechStatus");
const quizHeard = document.getElementById("quizHeard");

// ============ SPEECH RECOGNITION ============
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isListening = false;
let spokenAnswer = "";

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.onstart = () => {
        isListening = true;
        btnMic.classList.add("listening");
        speechStatus.textContent = "Listening...";
        speechStatus.classList.add("listening-text");
        quizHeard.classList.remove("hidden", "correct", "wrong");
        quizHeard.textContent = "...";
    };

    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript;
        spokenAnswer = transcript;
        quizInput.value = transcript;
        stopListening();
        setTimeout(() => checkAnswer(), 300);
    };

    recognition.onerror = (event) => {
        stopListening();
        if (event.error === "no-speech") {
            speechStatus.textContent = "No speech detected. Tap mic to try again.";
        } else if (event.error === "not-allowed") {
            speechStatus.textContent = "Microphone blocked. Allow mic in browser settings.";
        } else if (event.error === "network") {
            speechStatus.textContent = "Network error. Check internet connection.";
        } else {
            speechStatus.textContent = `Error: ${event.error}. Tap mic to retry.`;
        }
    };

    recognition.onend = () => {
        if (isListening) {
            isListening = false;
            btnMic.classList.remove("listening");
            speechStatus.classList.remove("listening-text");
        }
    };
} else {
    btnMic.style.display = "none";
    speechStatus.textContent = "Speech not supported. Use Chrome on your phone.";
}

function startListening() {
    if (!recognition || quizAnswered) return;
    if (direction === "en-es") {
        recognition.lang = "es-ES";
    } else {
        recognition.lang = "en-US";
    }
    spokenAnswer = "";
    try {
        recognition.start();
    } catch (e) {
        speechStatus.textContent = "Mic busy. Tap again.";
    }
}

function stopListening() {
    isListening = false;
    btnMic.classList.remove("listening");
    speechStatus.classList.remove("listening-text");
    try { recognition.stop(); } catch (e) {}
}

function toggleListening() {
    if (isListening) {
        stopListening();
        speechStatus.textContent = "Tap the mic and say your answer";
    } else {
        startListening();
    }
}

// Text-to-speech for pronouncing correct answers
function speakText(text, lang) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

// ============ PERSISTENCE ============
function loadState() {
    try {
        const saved = localStorage.getItem("spanishFlashcards");
        if (saved) {
            const state = JSON.parse(saved);
            knownSet = new Set(state.known || []);
            learningSet = new Set(state.learning || []);
        }
    } catch (e) {}
}

function saveState() {
    try {
        localStorage.setItem("spanishFlashcards", JSON.stringify({
            known: [...knownSet],
            learning: [...learningSet]
        }));
    } catch (e) {}
}

// ============ FLASHCARD MODE ============
function updateFlashcardDisplay() {
    if (currentCards.length === 0) {
        frontWord.textContent = "No cards in this category";
        backWord.textContent = "";
        frontCategory.textContent = "";
        backCategory.textContent = "";
        progressText.textContent = "0 / 0";
        progressBar.style.width = "0%";
        return;
    }

    const item = currentCards[currentIndex];
    if (direction === "en-es") {
        frontWord.textContent = item.en;
        backWord.textContent = item.es;
    } else {
        frontWord.textContent = item.es;
        backWord.textContent = item.en;
    }
    frontCategory.textContent = item.cat;
    backCategory.textContent = item.cat;

    progressText.textContent = `${currentIndex + 1} / ${currentCards.length}`;
    progressBar.style.width = `${((currentIndex + 1) / currentCards.length) * 100}%`;
    scoreKnow.textContent = `Know: ${knownSet.size}`;
    scoreDont.textContent = `Learning: ${learningSet.size}`;

    card.classList.remove("flipped");
}

function flipCard() {
    card.classList.toggle("flipped");
}

function nextCard() {
    if (currentCards.length === 0) return;
    currentIndex = (currentIndex + 1) % currentCards.length;
    if (mode === "flashcard") updateFlashcardDisplay();
    else updateQuizDisplay();
}

function prevCard() {
    if (currentCards.length === 0) return;
    currentIndex = (currentIndex - 1 + currentCards.length) % currentCards.length;
    if (mode === "flashcard") updateFlashcardDisplay();
    else updateQuizDisplay();
}

function markKnown() {
    if (currentCards.length === 0) return;
    const key = currentCards[currentIndex].es;
    knownSet.add(key);
    learningSet.delete(key);
    saveState();
    nextCard();
}

function markDontKnow() {
    if (currentCards.length === 0) return;
    const key = currentCards[currentIndex].es;
    learningSet.add(key);
    knownSet.delete(key);
    saveState();
    nextCard();
}

// ============ QUIZ MODE ============
function updateQuizDisplay() {
    if (currentCards.length === 0) {
        quizWord.textContent = "No cards in this category";
        quizCategory.textContent = "";
        return;
    }

    const item = currentCards[currentIndex];
    if (direction === "en-es") {
        quizWord.textContent = item.en;
        quizCategory.textContent = item.cat + " — Answer in Spanish";
    } else {
        quizWord.textContent = item.es;
        quizCategory.textContent = item.cat + " — Answer in English";
    }

    spokenAnswer = "";
    quizInput.value = "";
    quizInput.disabled = false;
    quizHeard.classList.add("hidden");
    quizHeard.classList.remove("correct", "wrong");
    quizHeard.textContent = "";
    quizFeedback.classList.add("hidden");
    quizFeedback.className = "quiz-feedback hidden";
    quizFeedbackText.textContent = "";
    quizCorrectAnswer.textContent = "";
    quizSubmit.textContent = "Check";
    quizAnswered = false;
    speechStatus.textContent = "";
    speechStatus.classList.remove("listening-text");

    progressText.textContent = `${currentIndex + 1} / ${currentCards.length}`;
    progressBar.style.width = `${((currentIndex + 1) / currentCards.length) * 100}%`;
    quizRightEl.textContent = `Correct: ${quizCorrect}`;
    quizWrongEl.textContent = `Wrong: ${quizWrong}`;
}

function normalizeAnswer(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[¿¡.,;:!?'"()\/]/g, "")
        .replace(/\s+/g, " ");
}

function checkAnswer() {
    if (currentCards.length === 0) return;

    if (quizAnswered) {
        nextCard();
        return;
    }

    // Use typed input or spoken answer
    const userAnswer = normalizeAnswer(quizInput.value || spokenAnswer);

    if (!userAnswer) return;

    const item = currentCards[currentIndex];
    let correctAnswer;
    let speakLang;
    if (direction === "en-es") {
        correctAnswer = item.es;
        speakLang = "es-ES";
    } else {
        correctAnswer = item.en;
        speakLang = "en-US";
    }

    const acceptableAnswers = correctAnswer.split(";").map(a => normalizeAnswer(a));
    const isCorrect = acceptableAnswers.some(acceptable => {
        if (userAnswer === acceptable) return true;
        if (acceptable.includes(userAnswer) && userAnswer.length >= 3) return true;
        if (userAnswer.includes(acceptable) && acceptable.length >= 3) return true;
        return false;
    });

    quizFeedback.classList.remove("hidden");
    quizAnswered = true;
    quizInput.disabled = true;
    quizSubmit.textContent = "Next →";
    speechStatus.textContent = "";

    if (isCorrect) {
        quizCorrect++;
        quizHeard.classList.remove("hidden");
        quizHeard.classList.add("correct");
        quizHeard.textContent = "Correct!";
        quizFeedback.className = "quiz-feedback correct";
        quizFeedbackText.textContent = correctAnswer;
        quizCorrectAnswer.textContent = "";
    } else {
        quizWrong++;
        quizHeard.classList.remove("hidden");
        quizHeard.classList.add("wrong");
        quizHeard.textContent = "Wrong!";
        quizFeedback.className = "quiz-feedback wrong";
        quizFeedbackText.textContent = "The correct answer is:";
        quizCorrectAnswer.textContent = correctAnswer;
        // Speak the correct answer aloud
        setTimeout(() => speakText(correctAnswer.split(";")[0].trim(), speakLang), 300);
    }

    quizRightEl.textContent = `Correct: ${quizCorrect}`;
    quizWrongEl.textContent = `Wrong: ${quizWrong}`;
}

// ============ MODE SWITCHING ============
function switchMode(newMode) {
    mode = newMode;
    if (mode === "flashcard") {
        flashcardMode.classList.remove("hidden");
        quizModeEl.classList.add("hidden");
        tabFlashcard.classList.add("active");
        tabQuiz.classList.remove("active");
        updateFlashcardDisplay();
    } else {
        flashcardMode.classList.add("hidden");
        quizModeEl.classList.remove("hidden");
        tabFlashcard.classList.remove("active");
        tabQuiz.classList.add("active");
        updateQuizDisplay();
    }
}

// ============ SHARED CONTROLS ============
function shuffleCards() {
    for (let i = currentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
    }
    currentIndex = 0;
    if (mode === "flashcard") updateFlashcardDisplay();
    else updateQuizDisplay();
}

function filterByCategory() {
    const cat = categoryFilter.value;
    if (cat === "all") {
        currentCards = [...vocab];
    } else {
        currentCards = vocab.filter(v => v.cat === cat);
    }
    currentIndex = 0;
    if (mode === "flashcard") updateFlashcardDisplay();
    else updateQuizDisplay();
}

function toggleDirection() {
    if (direction === "en-es") {
        direction = "es-en";
        btnDirection.textContent = "ES → EN";
    } else {
        direction = "en-es";
        btnDirection.textContent = "EN → ES";
    }
    if (mode === "flashcard") updateFlashcardDisplay();
    else updateQuizDisplay();
}

function resetProgress() {
    if (confirm("Reset all progress?")) {
        knownSet.clear();
        learningSet.clear();
        quizCorrect = 0;
        quizWrong = 0;
        saveState();
        if (mode === "flashcard") updateFlashcardDisplay();
        else updateQuizDisplay();
    }
}

// ============ EVENT LISTENERS ============
card.addEventListener("click", flipCard);
document.getElementById("btnFlip").addEventListener("click", flipCard);
document.getElementById("btnNext").addEventListener("click", nextCard);
document.getElementById("btnPrev").addEventListener("click", prevCard);
document.getElementById("btnKnow").addEventListener("click", markKnown);
document.getElementById("btnDontKnow").addEventListener("click", markDontKnow);
btnShuffle.addEventListener("click", shuffleCards);
btnDirection.addEventListener("click", toggleDirection);
btnReset.addEventListener("click", resetProgress);
categoryFilter.addEventListener("change", filterByCategory);

tabFlashcard.addEventListener("click", () => switchMode("flashcard"));
tabQuiz.addEventListener("click", () => switchMode("quiz"));

quizSubmit.addEventListener("click", checkAnswer);
btnMic.addEventListener("click", toggleListening);
quizInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        checkAnswer();
    }
});

// Keyboard shortcuts (flashcard mode only)
document.addEventListener("keydown", (e) => {
    if (mode !== "flashcard") return;
    if (e.target.tagName === "INPUT") return;

    switch (e.key) {
        case " ":
        case "Enter":
            e.preventDefault();
            flipCard();
            break;
        case "ArrowRight":
            nextCard();
            break;
        case "ArrowLeft":
            prevCard();
            break;
        case "ArrowUp":
            markKnown();
            break;
        case "ArrowDown":
            markDontKnow();
            break;
    }
});

// Touch swipe on card
let touchStartX = 0;
card.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

card.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) < 50) return;
    if (dx > 0) nextCard();
    else prevCard();
}, { passive: true });

// ============ INIT ============
loadState();
updateFlashcardDisplay();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}

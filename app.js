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
    // ===== CHAPTER 2 (p.105) =====
    // La clase - People
    { es: "El/la compañero/a de clase", en: "Classmate", cat: "La clase" },
    { es: "El/la estudiante", en: "Student", cat: "La clase" },
    { es: "El/la profesor(a)", en: "Teacher", cat: "La clase" },
    // La clase - Objects
    { es: "El borrador", en: "Eraser", cat: "La clase" },
    { es: "La calculadora", en: "Calculator", cat: "La clase" },
    { es: "El escritorio", en: "Desk", cat: "La clase" },
    { es: "El libro", en: "Book", cat: "La clase" },
    { es: "El mapa", en: "Map", cat: "La clase" },
    { es: "La mesa", en: "Table", cat: "La clase" },
    { es: "La mochila", en: "Backpack", cat: "La clase" },
    { es: "El papel", en: "Paper", cat: "La clase" },
    { es: "La papelera", en: "Wastebasket", cat: "La clase" },
    { es: "La pizarra", en: "Blackboard", cat: "La clase" },
    { es: "La pluma", en: "Pen", cat: "La clase" },
    { es: "La puerta", en: "Door", cat: "La clase" },
    { es: "El reloj", en: "Clock; Watch", cat: "La clase" },
    { es: "La silla", en: "Seat", cat: "La clase" },
    { es: "La tiza", en: "Chalk", cat: "La clase" },
    { es: "La ventana", en: "Window", cat: "La clase" },
    // La clase - Places
    { es: "La biblioteca", en: "Library", cat: "La clase" },
    { es: "La cafetería", en: "Cafeteria", cat: "La clase" },
    { es: "La casa", en: "House; Home", cat: "La clase" },
    { es: "El estadio", en: "Stadium", cat: "La clase" },
    { es: "El laboratorio", en: "Laboratory", cat: "La clase" },
    { es: "La librería", en: "Bookstore", cat: "La clase" },
    { es: "La universidad", en: "University; College", cat: "La clase" },
    // La clase - Academic
    { es: "La clase", en: "Class", cat: "La clase" },
    { es: "El curso, la materia", en: "Course", cat: "La clase" },
    { es: "El examen", en: "Test; Exam", cat: "La clase" },
    { es: "El horario", en: "Schedule", cat: "La clase" },
    { es: "La prueba", en: "Test; Quiz", cat: "La clase" },
    { es: "El semestre", en: "Semester", cat: "La clase" },
    { es: "La tarea", en: "Homework", cat: "La clase" },
    { es: "El trimestre", en: "Trimester; Quarter", cat: "La clase" },
    // Las materias
    { es: "El arte", en: "Art", cat: "Las materias" },
    { es: "La biología", en: "Biology", cat: "Las materias" },
    { es: "Las ciencias", en: "Sciences", cat: "Las materias" },
    { es: "La computación", en: "Computer science", cat: "Las materias" },
    { es: "La contabilidad", en: "Accounting", cat: "Las materias" },
    { es: "La economía", en: "Economics", cat: "Las materias" },
    { es: "El español", en: "Spanish", cat: "Las materias" },
    { es: "La física", en: "Physics", cat: "Las materias" },
    { es: "La geografía", en: "Geography", cat: "Las materias" },
    { es: "La historia", en: "History", cat: "Las materias" },
    { es: "Las humanidades", en: "Humanities", cat: "Las materias" },
    { es: "El inglés", en: "English", cat: "Las materias" },
    { es: "Las lenguas extranjeras", en: "Foreign languages", cat: "Las materias" },
    { es: "La literatura", en: "Literature", cat: "Las materias" },
    { es: "Las matemáticas", en: "Mathematics", cat: "Las materias" },
    { es: "La música", en: "Music", cat: "Las materias" },
    { es: "El periodismo", en: "Journalism", cat: "Las materias" },
    { es: "La psicología", en: "Psychology", cat: "Las materias" },
    { es: "La química", en: "Chemistry", cat: "Las materias" },
    { es: "La sociología", en: "Sociology", cat: "Las materias" },
    // Preposiciones y adverbios
    { es: "Al lado de", en: "Next to", cat: "Preposiciones" },
    { es: "A la derecha de", en: "To the right of", cat: "Preposiciones" },
    { es: "A la izquierda de", en: "To the left of", cat: "Preposiciones" },
    { es: "Allá", en: "Over there", cat: "Preposiciones" },
    { es: "Allí", en: "There", cat: "Preposiciones" },
    { es: "Cerca de", en: "Near", cat: "Preposiciones" },
    { es: "Con", en: "With", cat: "Preposiciones" },
    { es: "Debajo de", en: "Below", cat: "Preposiciones" },
    { es: "Delante de", en: "In front of", cat: "Preposiciones" },
    { es: "Detrás de", en: "Behind", cat: "Preposiciones" },
    { es: "En", en: "In; On", cat: "Preposiciones" },
    { es: "Encima de", en: "On top of", cat: "Preposiciones" },
    { es: "Entre", en: "Between; Among", cat: "Preposiciones" },
    { es: "Lejos de", en: "Far from", cat: "Preposiciones" },
    { es: "Sin", en: "Without", cat: "Preposiciones" },
    { es: "Sobre", en: "On; Over", cat: "Preposiciones" },
    // Verbos (Ch.2)
    { es: "Bailar", en: "To dance", cat: "Verbos" },
    { es: "Buscar", en: "To look for", cat: "Verbos" },
    { es: "Caminar", en: "To walk", cat: "Verbos" },
    { es: "Cantar", en: "To sing", cat: "Verbos" },
    { es: "Cenar", en: "To have dinner", cat: "Verbos" },
    { es: "Comprar", en: "To buy", cat: "Verbos" },
    { es: "Contestar", en: "To answer", cat: "Verbos" },
    { es: "Conversar", en: "To converse; To chat", cat: "Verbos" },
    { es: "Desayunar", en: "To have breakfast", cat: "Verbos" },
    { es: "Descansar", en: "To rest", cat: "Verbos" },
    { es: "Desear", en: "To wish; To desire", cat: "Verbos" },
    { es: "Dibujar", en: "To draw", cat: "Verbos" },
    { es: "Enseñar", en: "To teach", cat: "Verbos" },
    { es: "Escuchar la radio/música", en: "To listen to the radio/music", cat: "Verbos" },
    { es: "Esperar", en: "To wait for; To hope", cat: "Verbos" },
    { es: "Estar", en: "To be", cat: "Verbos" },
    { es: "Estudiar", en: "To study", cat: "Verbos" },
    { es: "Explicar", en: "To explain", cat: "Verbos" },
    { es: "Gustar", en: "To like", cat: "Verbos" },
    { es: "Hablar", en: "To talk; To speak", cat: "Verbos" },
    { es: "Llegar", en: "To arrive", cat: "Verbos" },
    { es: "Llevar", en: "To carry", cat: "Verbos" },
    { es: "Mirar", en: "To look at; To watch", cat: "Verbos" },
    { es: "Necesitar", en: "To need", cat: "Verbos" },
    { es: "Practicar", en: "To practice", cat: "Verbos" },
    { es: "Preguntar", en: "To ask a question", cat: "Verbos" },
    { es: "Preparar", en: "To prepare", cat: "Verbos" },
    { es: "Regresar", en: "To return", cat: "Verbos" },
    { es: "Terminar", en: "To end; To finish", cat: "Verbos" },
    { es: "Tomar", en: "To take; To drink", cat: "Verbos" },
    { es: "Trabajar", en: "To work", cat: "Verbos" },
    { es: "Viajar", en: "To travel", cat: "Verbos" },
    // Palabras adicionales (Ch.2)
    { es: "¿Adónde?", en: "Where to?", cat: "Adicionales" },
    { es: "Ahora", en: "Now", cat: "Adicionales" },
    { es: "¿Cuál?, ¿Cuáles?", en: "Which?; Which ones?", cat: "Adicionales" },
    { es: "¿Por qué?", en: "Why?", cat: "Adicionales" },
    { es: "Porque", en: "Because", cat: "Adicionales" },
    // Los días de la semana
    { es: "¿Cuándo?", en: "When?", cat: "Días de la semana" },
    { es: "¿Qué día es hoy?", en: "What day is it?", cat: "Días de la semana" },
    { es: "Hoy es...", en: "Today is...", cat: "Días de la semana" },
    { es: "La semana", en: "Week", cat: "Días de la semana" },
    { es: "Lunes", en: "Monday", cat: "Días de la semana" },
    { es: "Martes", en: "Tuesday", cat: "Días de la semana" },
    { es: "Miércoles", en: "Wednesday", cat: "Días de la semana" },
    { es: "Jueves", en: "Thursday", cat: "Días de la semana" },
    { es: "Viernes", en: "Friday", cat: "Días de la semana" },
    { es: "Sábado", en: "Saturday", cat: "Días de la semana" },
    { es: "Domingo", en: "Sunday", cat: "Días de la semana" },
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

    // Pronounce the front word
    const frontText = (direction === "en-es") ? item.en : item.es;
    const frontLang = (direction === "en-es") ? "en-US" : "es-ES";
    speakText(frontText.split(";")[0].trim(), frontLang);
}

function flipCard() {
    card.classList.toggle("flipped");
    // Pronounce the back word when flipped
    if (currentCards.length === 0) return;
    const item = currentCards[currentIndex];
    const isFlipped = card.classList.contains("flipped");
    if (isFlipped) {
        const backText = (direction === "en-es") ? item.es : item.en;
        const backLang = (direction === "en-es") ? "es-ES" : "en-US";
        speakText(backText.split(";")[0].trim(), backLang);
    } else {
        const frontText = (direction === "en-es") ? item.en : item.es;
        const frontLang = (direction === "en-es") ? "en-US" : "es-ES";
        speakText(frontText.split(";")[0].trim(), frontLang);
    }
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

// Tap the correct answer to hear it spoken
document.getElementById("quizCorrectAnswer").addEventListener("click", () => {
    const text = quizCorrectAnswer.textContent;
    if (!text) return;
    const lang = (direction === "en-es") ? "es-ES" : "en-US";
    speakText(text, lang);
});

document.getElementById("quizFeedback").addEventListener("click", () => {
    const text = quizCorrectAnswer.textContent;
    if (!text) return;
    const lang = (direction === "en-es") ? "es-ES" : "en-US";
    speakText(text, lang);
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

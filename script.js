// ========================================
// ОСНОВНЫЕ ЭЛЕМЕНТЫ
// ========================================

const yesT = document.getElementById("yesT");
const noT = document.getElementById("noT");

const title = document.getElementById("title");
const text = document.getElementById("text");

const nameInput = document.getElementById("nameInput");
const nameOk = document.getElementById("nameOk");
const nameSkip = document.getElementById("nameSkip");

const continueButton =
    document.getElementById("continueButton");


// ========================================
// ПРОДОЛЖИТЬ
// ========================================

const questionContinue =
    document.getElementById("questionContinue");


// ========================================
// ОТВЕТЫ
// ========================================

const questionButtons =
    document.getElementById("questionButtons");

const answer1 =
    document.getElementById("answer1");

const answer2 =
    document.getElementById("answer2");


// ========================================
// TELEGRAM
// ========================================

const telegramBlock =
    document.getElementById("telegramBlock");


// ========================================
// POPUP
// ========================================

const errorPopup =
    document.getElementById("errorPopup");

const popupClose =
    document.getElementById("popupClose");

const popupText =
    document.getElementById("popupText");

const popupYes =
    document.getElementById("popupYes");

const popupNo =
    document.getElementById("popupNo");

const overlay =
    document.getElementById("overlay");


// ========================================
// СООБЩЕНИЯ POPUP
// ========================================

const popupMessages = [

    "мне кажется ты промазала",

    "нет, мне не кажется ты точно промазала",

    "я конечно понимаю что иногда глазки плывут, но постарайся в следующий раз попасть",

    "а на 4 раз нельзя, в Японии это значит смерть",

    "нее, ну скажи, ты же специально?",

    "не ври мне, я знаю что ты не случайно попадаешь",

    "невозможно промазать 6 раз подряд",

    "ты снова на это нажала",

    "воот, я так и знал",

    "ну может ты совсем немного попробуешь?",

    "я думал ты шутила просто, вот значит как, ладно, можешь нажимать, мне уже всё равно",

    "ладно, ладно, в следующий раз точно отпущу",

    "вот и последний твой шанс, не нажмёшь сейчас и всё, больше не увидимся же",

    "я конечно говорил что отпущу, но 13 между прочим это несчастливое число, так что считай сберёг тебя",

    "капец ты не благодарная конечно, но может всё таки забудем про кнопку нет?",

    "шучу я, так не честно, давай может всё таки попробуем потыкать на кнопочки?",

    "ну нет так нет, можешь нажимать"
];


let popupNumber = 0;


// ========================================
// ОТВЕТЫ
// ========================================

// 1 = хороший ответ
// 2 = плохой ответ

let boyAnswer = 0;


// 1 = часто
// 2 = редко

let walkAnswer = 0;


// ========================================
// POPUP
// ========================================

function nextPopup() {

    if (popupNumber === 16) {

        finishPopup();

        return;
    }

    popupNumber++;

    popupText.textContent =
        popupMessages[popupNumber];


    if (popupNumber === 14) {

        popupNo.style.display = "none";
        popupClose.style.display = "none";

    } else {

        popupNo.style.display = "inline-block";
        popupClose.style.display = "inline-block";
    }


    errorPopup.style.display = "block";
}


function finishPopup() {

    errorPopup.style.display = "none";
    overlay.style.display = "none";

    title.textContent = "пока пока";

    text.textContent = "";

    yesT.style.display = "none";
    noT.style.display = "none";

    nameInput.style.display = "none";
    nameOk.style.display = "none";
    nameSkip.style.display = "none";

    continueButton.style.display = "none";

    questionButtons.style.display = "none";
    questionContinue.style.display = "none";

    telegramBlock.style.display = "none";
}


function returnToQuestion() {

    errorPopup.style.display = "none";
    overlay.style.display = "none";

    title.textContent =
        "я уже подумал что правда уйдёшь, ну что ж, тыкаем?";

    text.textContent = "";

    yesT.textContent = "давай";
    noT.textContent = "нет";

    yesT.style.display = "inline-block";
    noT.style.display = "inline-block";
}


function firstQuestion() {

    title.textContent =
        "спасибо что посетила мой сайт";

    text.textContent =
        "всё что от тебя требуется это тыкать на кнопочки которые тебе понравятся, согласна?";

    yesT.textContent = "хорошо";
    noT.textContent = "откажусь";
}


// ========================================
// ИМЯ
// ========================================

function showNameQuestion() {

    title.textContent =
        "с тобой приятно иметь дело)";

    text.textContent =
        "как тебя зовут?";

    nameInput.value = "";

    nameInput.style.display = "block";
    nameOk.style.display = "inline-block";
    nameSkip.style.display = "inline-block";

    continueButton.style.display = "none";

    yesT.style.display = "none";
    noT.style.display = "none";

    questionButtons.style.display = "none";
    questionContinue.style.display = "none";

    telegramBlock.style.display = "none";
}


// ========================================
// ПОСЛЕ ИМЕНИ
// ========================================

function showFirstRealQuestion() {

    nameInput.style.display = "none";
    nameOk.style.display = "none";
    nameSkip.style.display = "none";

    continueButton.style.display = "none";

    yesT.style.display = "none";
    noT.style.display = "none";

    showWalkQuestion();
}


// ========================================
// ВОПРОС ПРО ПРОГУЛКИ
// ========================================

function showWalkQuestion() {

    title.textContent =
        "как часто ты гуляешь?";

    text.textContent = "";

    questionButtons.style.display = "block";
    questionContinue.style.display = "none";

    answer1.textContent = "часто";
    answer2.textContent = "редко";
}


// ========================================
// РЕАКЦИЯ НА ПРОГУЛКИ
// ========================================

function showWalkReaction() {

    questionButtons.style.display = "none";

    questionContinue.style.display = "inline-block";


    if (walkAnswer === 1) {

        title.textContent =
            "а со мной было бы ещё чаще)";

    } else {

        title.textContent =
            "со мной будешь чаще)";
    }

    text.textContent = "";
}


// ========================================
// ВОПРОС ПРО МАЛЬЧИКА
// ========================================

function showBoyQuestion() {

    questionContinue.style.display = "none";

    questionButtons.style.display = "block";

    title.textContent =
        "ну а теперь вопрос поинтереснее";

    text.textContent =
        "как тебе мальчик, который дал тебе этот QR?";

    answer1.textContent =
        "в целом он не так плох";

    answer2.textContent =
        "ну, мне не очень понравился";
}


// ========================================
// РЕАКЦИЯ НА МАЛЬЧИКА
// ========================================

function showBoyReaction() {

    questionButtons.style.display = "none";

    questionContinue.style.display = "inline-block";


    if (boyAnswer === 1) {

        title.textContent =
            "спасибо) ты тоже ничего)";

    } else {

        title.textContent =
            "жаль, но я всё же спрошу";
    }

    text.textContent = "";
}


// ========================================
// ВОПРОС ПОЧЕМУ ПОСЕТИЛА САЙТ
// ========================================

function showReasonQuestion() {

    questionContinue.style.display = "none";

    questionButtons.style.display = "block";

    title.textContent =
        "почему ты посетила этот сайт?";

    text.textContent = "";


    if (boyAnswer === 1) {

        answer1.textContent =
            "просто было интересно, вдруг чего интересного узнаю";

        answer2.textContent =
            "скуку убиваю, а так вообще больше парень понравился, чем сайт";

    } else {

        answer1.textContent =
            ">грубо< не твоё дело";

        answer2.textContent =
            "потому что соврала на прошлый вопрос";
    }
}


// ========================================
// ВОПРОС ПРО ПАРНЯ
// ========================================

function showBoyfriendQuestion() {

    questionButtons.style.display = "block";

    questionContinue.style.display = "none";

    title.textContent =
        "а у такой красавицы парень есть?";

    text.textContent = "";

    answer1.textContent = "да";
    answer2.textContent = "нет";
}


// ========================================
// ОТВЕТ "ДА"
// ========================================

function showBoyfriendYes() {

    questionButtons.style.display = "none";

    questionContinue.style.display = "none";

    telegramBlock.style.display = "none";

    title.textContent =
        "прошу прощения за подкаты, спасибо большое что посетила сайт, пока пока";

    text.textContent = "";
}


// ========================================
// ОТВЕТ "НЕТ"
// ========================================

function showBoyfriendNo() {

    questionButtons.style.display = "none";

    questionContinue.style.display = "none";


    title.textContent =
        "нее, не надейся, не предложу я сразу встречаться, я вообще то пообщаться хочу, ну а дальше уже посмотрим)";


    text.textContent =
        "но можешь иметь ввиду что изначально ты вообще получила QR потому что я подумал что ты мне понравилась и нет я не каждой встречной этот QR давал, короче спасибо за тэстик, если есть желание то ниже можешь увидеть мой юз";


    // ПОКАЗЫВАЕМ TELEGRAM

    telegramBlock.style.display = "block";
}


// ========================================
// НАЧАЛО
// ========================================

yesT.addEventListener("click", function() {

    if (yesT.textContent === "давай") {

        firstQuestion();

        return;
    }

    showNameQuestion();
});


noT.addEventListener("click", function() {

    if (noT.textContent === "нет") {

        title.textContent =
            "что ты тут тогда забыла? удивлён что ты ещё не ушла, пока пока";

        text.textContent = "";

        yesT.style.display = "none";
        noT.style.display = "none";

        return;
    }


    popupNumber = 0;

    popupText.textContent =
        popupMessages[0];

    popupNo.style.display = "inline-block";
    popupClose.style.display = "inline-block";

    errorPopup.style.display = "block";
    overlay.style.display = "block";
});


// ========================================
// ИМЯ
// ========================================

nameOk.addEventListener("click", function() {

    let name =
        nameInput.value.trim();


    if (name === "") {

        text.textContent =
            "ты забыла написать имя :)";

        return;
    }


    let nameCheck =
        /^[а-яА-ЯёЁa-zA-Z]+(?:[ -][а-яА-ЯёЁa-zA-Z]+)*$/;


    if (!nameCheck.test(name) || name.length < 2) {

        text.textContent =
            "хм, это не очень похоже на имя :)";

        return;
    }


    title.textContent =
        "мило что решила мне его сказать, однако я его не вижу 😅";

    text.textContent = "";


    nameInput.style.display = "none";
    nameOk.style.display = "none";
    nameSkip.style.display = "none";


    continueButton.style.display = "inline-block";
});


nameSkip.addEventListener("click", function() {

    title.textContent =
        "всё равно спасибо что ещё не покинула мой сайт";

    text.textContent = "";


    nameInput.style.display = "none";
    nameOk.style.display = "none";
    nameSkip.style.display = "none";


    continueButton.style.display = "inline-block";
});


// ========================================
// ПРОДОЛЖИТЬ ПОСЛЕ ИМЕНИ
// ========================================

continueButton.addEventListener("click", function() {

    showFirstRealQuestion();

});


// ========================================
// ПРОДОЛЖИТЬ МЕЖДУ ВОПРОСАМИ
// ========================================

questionContinue.addEventListener("click", function() {


    // После прогулок

    if (
        title.textContent ===
        "а со мной было бы ещё чаще)" ||

        title.textContent ===
        "со мной будешь чаще)"
    ) {

        showBoyQuestion();

        return;
    }


    // После вопроса про мальчика

    if (
        title.textContent ===
        "спасибо) ты тоже ничего)" ||

        title.textContent ===
        "жаль, но я всё же спрошу"
    ) {

        showReasonQuestion();

        return;
    }


    // После "ещё раз большое спасибо"

    if (
        title.textContent ===
        "ещё раз большое спасибо"
    ) {

        showBoyfriendQuestion();

        return;
    }


    // После "на первый взгляд ты была милее"

    if (
        title.textContent ===
        "на первый взгляд ты была милее"
    ) {

        showBoyfriendQuestion();

        return;
    }

});


// ========================================
// ПЕРВАЯ КНОПКА
// ========================================

answer1.addEventListener("click", function() {


    // Прогулки

    if (
        title.textContent ===
        "как часто ты гуляешь?"
    ) {

        walkAnswer = 1;

        showWalkReaction();

        return;
    }


    // Мальчик

    if (
        title.textContent ===
        "ну а теперь вопрос поинтереснее"
    ) {

        boyAnswer = 1;

        showBoyReaction();

        return;
    }


    // Почему посетила сайт

    if (
        title.textContent ===
        "почему ты посетила этот сайт?"
    ) {

        if (boyAnswer === 1) {

            showLastQuestion();

        } else {

            title.textContent =
                "на первый взгляд ты была милее";

            text.textContent = "";

            questionButtons.style.display = "none";

            questionContinue.style.display = "inline-block";
        }

        return;
    }


    // Есть ли парень

    if (
        title.textContent ===
        "а у такой красавицы парень есть?"
    ) {

        showBoyfriendYes();

        return;
    }

});


// ========================================
// ВТОРАЯ КНОПКА
// ========================================

answer2.addEventListener("click", function() {


    // Прогулки

    if (
        title.textContent ===
        "как часто ты гуляешь?"
    ) {

        walkAnswer = 2;

        showWalkReaction();

        return;
    }


    // Мальчик

    if (
        title.textContent ===
        "ну а теперь вопрос поинтереснее"
    ) {

        boyAnswer = 2;

        showBoyReaction();

        return;
    }


    // Почему посетила сайт

    if (
        title.textContent ===
        "почему ты посетила этот сайт?"
    ) {

        if (boyAnswer === 1) {

            title.textContent =
                "ещё раз большое спасибо";

            text.textContent = "";

            questionButtons.style.display = "none";

            questionContinue.style.display = "inline-block";

        } else {

            showBoyfriendQuestion();
        }

        return;
    }


    // Есть ли парень

    if (
        title.textContent ===
        "а у такой красавицы парень есть?"
    ) {

        showBoyfriendNo();

        return;
    }

});


// ========================================
// ПОСЛЕДНИЙ ВОПРОС
// ========================================

function showLastQuestion() {

    questionButtons.style.display = "none";

    questionContinue.style.display = "none";

    showBoyfriendQuestion();
}


// ========================================
// POPUP
// ========================================

popupNo.addEventListener(
    "click",
    nextPopup
);


popupClose.addEventListener(
    "click",
    nextPopup
);


popupYes.addEventListener(
    "click",
    function() {


        if (popupNumber === 14) {

            nextPopup();

            return;
        }


        if (popupNumber === 16) {

            returnToQuestion();

            return;
        }


        errorPopup.style.display = "none";

        overlay.style.display = "none";

    }
);
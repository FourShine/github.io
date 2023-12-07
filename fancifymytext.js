function makeTextBigger() {
    document.getElementById("myTextArea").style.fontSize = "24pt";
}

function makeTextFancy() {
    var textArea = document.getElementById("myTextArea");
    var fancyRadio = document.getElementById("fancyShmancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function makeTextBoring() {
    var textArea = document.getElementById("myTextArea");
    var boringRadio = document.getElementById("boringBetty");

    if (boringRadio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function makeTextBold() {
    var textArea = document.getElementById("myTextArea");
    textArea.style.fontWeight = "bold";
    alert("Text is now bold!");
}

function uppercaseText() {
    var textArea = document.getElementById("myTextArea");
    var sentences = textArea.value.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].length > 0) {
            var words = sentences[i].split(" ");
            words[words.length - 1] = words[words.length - 1] + "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ").toUpperCase();
}

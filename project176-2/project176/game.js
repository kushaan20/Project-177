let words = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "Chess",
    },
    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France",
    },
]
$(document).ready(function () {
    gameOver();
})

function gameOver() {
    var randomWord = words[Math.floor(Math.random()*words.length)]
    $("#blanks").empty()

    for(var i = 0; i < randomWord.inputs;i++){
        var inputhtml = `<span class = "fill_blanks" id = "input_${i}">_</span>`
        $("#blanks").append(inputhtml)
    }

    $("#hint").html(randomWord.category)

    var gameOver = false

    $(".clickable").click(function(){
        var correctGuess = false;

        let id = $(this).attr("id");

        var life = parseInt($("#life").text())

        for(var i = 0; i < randomWord.word.length; i++){
            if(randomWord.word.charAt(i).toLowerCase() == id){
                if(life > 0 && ($(".fill_blanks").eq(i).html() == "_"|| $(".fill_blanks").eq(i).html() == id)){
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    if($("#blanks").text() === randomWord.word.toLowerCase()){
                        $("#result").text("You Win!")
                        correctGuess = true;
                        gameOver = true
                    }
                }
            }
        }
    })
}

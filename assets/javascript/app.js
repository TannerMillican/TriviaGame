window.onload=function() {
    $("#startButton").on("click", startFunction);
    $("#submitButton").on("click", submitFunction);
}


    
var questions = [
    {
        question: "What planet did Luke Skywalker's parents live on?",
        answers: {
            a: "Dagobah",
            b: "Tatooine",
            c: "Naboo",
            d: "Hoth"
        },
    },
    {
        question: "What color is Yoda's lightsaber?",
        answers: {
            a: "Yellow",
            b: "Blue",
            c: "Green",
            d: "Purple"
        },
    },
    {
        question: "What is the name of Han Solo's ship?",
        answers: {
            a: "Millinium Falcon",
            b: "Tie Fighter",
            c: "X Wing",
            d: "Pod Racer"
        },
    },
    {
        question: "What is the name of Han Solo's companion?",
        answers: {
            a: "Jar Jar Binks",
            b: "C-3PO",
            c: "Boba Fett",
            d: "Chewbacca"
        },
    },
    {
        question: "What is Darth Vader's true identity?",
        answers: {
            a: "Luke Skywalker",
            b: "Han Solo",
            c: "Anakin Skywalker",
            d: "Jar Jar Binks",
        },
    }
];

    function startFunction(){

        document.getElementById("buttonDisappear").innerHTML = "";

        for(var i = 0; i < questions.length; i++) {
        
            var q1 = questions[0].question;
            var q2 = questions[1].question;
            var q3 = questions[2].question;
            var q4 = questions[3].question;
            var q5 = questions[4].question;
        
            document.getElementById("q1").innerHTML = q1;
            document.getElementById("q2").innerHTML = q2;
            document.getElementById("q3").innerHTML = q3;
            document.getElementById("q4").innerHTML = q4;
            document.getElementById("q5").innerHTML = q5;

    }

        for(var i = 0; i < questions.length; i++) {

            var a1 = questions[0].answers.a;
            var a2 = questions[0].answers.b;
            var a3 = questions[0].answers.c;
            var a4 = questions[0].answers.d;
            var a5 = questions[1].answers.a;
            var a6 = questions[1].answers.b;
            var a7 = questions[1].answers.c;
            var a8 = questions[1].answers.d;
            var a9 = questions[2].answers.a;
            var a10 = questions[2].answers.b;
            var a11 = questions[2].answers.c;
            var a12 = questions[2].answers.d;
            var a13 = questions[3].answers.a;
            var a14 = questions[3].answers.b;
            var a15 = questions[3].answers.c;
            var a16 = questions[3].answers.d;
            var a17 = questions[4].answers.a;
            var a18 = questions[4].answers.b;
            var a19 = questions[4].answers.c;
            var a20 = questions[4].answers.d;

            document.getElementById("a1").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a1; + "</label></input>"
            document.getElementById("a2").innerHTML = "<input type=radio name=answer value=correct ><label>" + a2; + "</label></input>"
            document.getElementById("a3").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a3; + "</label></input>"
            document.getElementById("a4").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a4; + "</label></input>"
            document.getElementById("a5").innerHTML = "<input type=radio name=answer value=incorect ><label>" + a5; + "</label></input>"
            document.getElementById("a6").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a6; + "</label></input>"
            document.getElementById("a7").innerHTML = "<input type=radio name=answer value=correct ><label>" + a7; + "</label></input>"
            document.getElementById("a8").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a8; + "</label></input>"
            document.getElementById("a9").innerHTML = "<input type=radio name=answer value=correct ><label>" + a9; + "</label></input>"
            document.getElementById("a10").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a10; + "</label></input>"
            document.getElementById("a11").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a11; + "</label></input>"
            document.getElementById("a12").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a12; + "</label></input>"
            document.getElementById("a13").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a13; + "</label></input>"
            document.getElementById("a14").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a14; + "</label></input>"
            document.getElementById("a15").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a15; + "</label></input>"
            document.getElementById("a16").innerHTML = "<input type=radio name=answer value=correct ><label>" + a16; + "</label></input>"
            document.getElementById("a17").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a17; + "</label></input>"
            document.getElementById("a18").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a18; + "</label></input>"
            document.getElementById("a19").innerHTML = "<input type=radio name=answer value=correct ><label>" + a19; + "</label></input>"
            document.getElementById("a20").innerHTML = "<input type=radio name=answer value=incorrect ><label>" + a20; + "</label></input>"
        }

        document.getElementById("submit").innerHTML = "<button type=button id=submitButton>" + "Submit" + "</button"
}

    function submitFunction(){
        getButtonValues();
        var correct = 0;
        var incorect = 0;

        function getButtonValues(){
            var button = document.getElementsByName('answer');

            for(var i = 0; button.length; i++) {
                if(button[i].checked) {
                    return button[i].value
                }
                
            }
        }
    }
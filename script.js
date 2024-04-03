window.addEventListener('load', function() {
    var input = document.getElementById('note');
    var result = document.getElementById('resultat');

    input.addEventListener('input', function() {
        console.log("input");
        var v = input.value;
        var note = 0;
        if(v > 70){
            note = (v-70)/30*10 + 10;
        }else{
            note = v/70*10;
        }
        result.innerHTML = "note : " + note.toFixed(2)+"/20";
    });
});
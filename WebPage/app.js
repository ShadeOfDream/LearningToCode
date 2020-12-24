document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('converter-form');
    form.addEventListener('submit', function(e) {
        let c = document.getElementById("celsius").value;
        let f = convertToF(c);
        document.getElementById("answer").innerHTML = "That's <b>"
        + f + "&#8451F.</b>";
        if(c > 26){
            document.getElementById("comment").innerText = "Phew, that's hot!";
        } else{
            document.getElementById("comment").innerText = "";
        }
        e.preventDefault();
    });
});

function convertToF(celsius) {
    return Number(celsius) * 9 / 5 + 32;
}
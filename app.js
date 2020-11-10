window.onload = function(){
    document.getElementById('button').onclick = function() {
        get_results(document.getElementById("text_Field").value);
    }
}

function get_results(res) {

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('result').innerHTML =this.responseText;
        }
    }
    xhr.open("GET", "superheroes.php?q="+res, true);
    xhr.send()
}

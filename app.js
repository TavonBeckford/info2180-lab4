window.onload = function(){
    var ben = document.getElementById('button');
    ben.addEventListener('click', get_results);
}

function get_results() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);
    xhr.onload = function(){
        if(this.status == 200){
            alert(this.responseText);
        }
    }
    xhr.send()
}

let roundes = document.getElementsByClassName("round-section")
let round = roundes[0]
let left = 0
let topposi = 0
window.addEventListener('keydown', function (e) {
    if (e.keyCode == 39) {
        left += 2;
        round.style.left = left + 'px';
    }
    else if (e.keyCode == 40) {
        topposi += 2;
        round.style.top = topposi + 'px';
    }
    else if (e.keyCode == 37) {
        left -= 2;
        round.style.left = left + 'px';
    }
    else if (e.keyCode ==38) {
        topposi -= 2;
        round.style.top = topposi + 'px';
    }
    else if (e.keyCode ==13) {
        
    }
}
)

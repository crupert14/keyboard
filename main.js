const chars = document.getElementsByClassName("char");
const nums = document.getElementsByClassName("num");
const letters = document.getElementsByClassName("letter");
let statement = [];
let caps = false;
let char;

for(let i=0;i<letters.length;i++) {
    letters[i].setAttribute("id", letters[i].innerHTML.toString().toUpperCase());

document.onkeydown = function(e) {
    if(e.code.includes('Key')) {
        char = e.code.substring(3, e.code.length);
    }
    else {
        char = e.code;
    }

    document.getElementById(char).style.animationName = "detect";
    document.getElementById(char).style.animationDuration = "2000ms";

    if(caps) {
        statement.push(char.toUpperCase());
        updateDisplay();
    }
    else {
        statement.push(char.toLowerCase());
        updateDisplay();
    }

    setTimeout(() => {
        document.getElementById(char).style.animation = "none";
    }, 2000);
}
}

for(let i=0;i<chars.length;i++) {
    selectCharacter(chars[i], "");
}

for(let i=0;i<nums.length;i++) {
    selectCharacter(nums[i], "");
}

function selectCharacter(obj, spec = "") {
        obj.addEventListener("click", () => {
        statement.push(obj.innerHTML);
        updateDisplay();
    });
}

function updateDisplay() {
    if(statement.length <= 0) {
        document.getElementById("output").innerHTML = "Start Typing...";;
    }
    else {
        let holder = "";
        for(let i=0;i<statement.length;i++) {
            holder += statement[i];
        }
        document.getElementById("output").innerHTML = holder;
}   
}

function whitespace(val) {
    if(val === "tab") {
        statement.push("\u2003");
        statement.push("\u2003");
    }
    else if(val === "perm") {
        statement.push(" ");
    }
    updateDisplay();
}

function del() {
    statement.pop();
    updateDisplay();
}

function toggleCaps(time) {
    if(time === "temp") {

    }
    else if(time === "perm") {
        if(caps) {
            for(let i=0; i<chars.length;i++) {
                chars[i].innerHTML = chars[i].innerHTML.toLowerCase();
            }
            caps = false;
        }
        else {
            for(let i=0; i<chars.length;i++) {
                chars[i].innerHTML = chars[i].innerHTML.toUpperCase();
            }
            caps = true;
        }
    }   
}

function mDown() {
    if(caps) {
        for(let i=0; i<chars.length;i++) {
            chars[i].innerHTML = chars[i].innerHTML.toLowerCase();
        }
        caps = false;
    }
    else {
        for(let i=0; i<chars.length;i++) {
            chars[i].innerHTML = chars[i].innerHTML.toUpperCase();
        }
        caps = true;
    }
}

function mUp() {
    if(caps) {
        for(let i=0; i<chars.length;i++) {
            chars[i].innerHTML = chars[i].innerHTML.toLowerCase();
        }
        caps = false;
    }
    else {
        for(let i=0; i<chars.length;i++) {
            chars[i].innerHTML = chars[i].innerHTML.toUpperCase();
        }
        caps = true;
    }
}

function newLine() {
    statement.push("\n");
}
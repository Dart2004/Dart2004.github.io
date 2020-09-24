window.onload = () => {
    try{
        document.getElementById("logoutmessage").hidden = true;
    }
    finally {
        
    }
    if (document.body.className == "dark"){
        console.log("Using dark theme");
    }
    else if (document.body.className == "vcenter"){
        console.log("Centered text");
        console.log("Using light theme");
        document.body.className = "vcenter light";
    }
    else if (document.body.className == "vcenter dark"){
        console.log("Centered text");
        console.log("Using dark theme");
    }
    else if (document.body.className == "dark vcenter"){
        console.log("Centered text");
        console.log("Using dark theme");
    }
    else if (document.body.className == "vcenter light"){
        console.log("Centered text");
        console.log("Using light theme");
    }
    else if (document.body.className == "light vcenter"){
        console.log("Centered text");
        console.log("Using light theme");
    }
    else {
        document.body.className = "light";
        console.log("Using light theme");
    }
    try {
        for (item in document.getElementsByClassName("close")){
            document.getElementsByClassName("close").item(item).onmousedown = () => {
                document.getElementsByClassName("close").item(item).parentElement.hidden=true;
            }
        }
    }
    
    finally {
    
    }
    setInterval(addSecond,1000);
    setInterval(remSecond,1000);
    console.log("Setup done");
}



function setDesign(){
    if (document.body.className == "light"){
        document.body.className = "dark";
        console.log("Changing to dark theme");
    }
    else if (document.body.className == "light vcenter"){
        document.body.className = "dark vcenter";
        console.log("Changing to dark theme");
    }
    else if (document.body.className == "vcenter light"){
        document.body.className = "vcenter dark";
        console.log("Changing to dark theme");
    }
    else if (document.body.className == "dark vcenter"){
        document.body.className = "light vcenter";
        console.log("Changing to light theme");
    }
    else {
        document.body.className = "vcenter light";
        console.log("Changing to light theme");
    }
}

function addSecond(){
    for (item in document.getElementsByClassName("seconds")) {
        document.getElementsByClassName("seconds").item(item).innerHTML = parseFloat(document.getElementsByClassName("seconds").item(item).innerHTML) + 0.25;
    }
}
function remSecond(){
    for (item in document.getElementsByClassName("-seconds")) {
        document.getElementsByClassName("-seconds").item(item).innerHTML = parseFloat(document.getElementsByClassName("-seconds").item(item).innerHTML) - 0.25;
        if (document.getElementsByClassName("-seconds").item(item).id == "logoutin"){
            if (parseFloat(document.getElementById("logoutin").innerHTML) == 0){
                try {
                    logout();
                }
                finally {
                    
                }
            }
        }
        if (document.getElementsByClassName("-seconds").item(item).id == "closein"){
            if (parseFloat(document.getElementById("closein").innerHTML) == 0){
                try {
                    close();
                }
                finally {
                    
                }
            }
        }
    }
}
function logout(){
    message = document.getElementById("logoutmessage").innerHTML;
    document.body.innerHTML = message;
}

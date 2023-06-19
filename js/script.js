function newRow() {
    const table = document.getElementById("insertBody");
    const row = document.getElementById("baseRow").cloneNode(true);

    row.style = "display:contents";
    table.insertRow().appendChild(row);
}

function rowRemove(obj) {
    const row = obj.closest("tr");

    row.remove();
}

function scan() {
    const body = document.getElementById("back");
    let canvas = document.createElement("canvas");

    const vw = window.screen.width / 100;
    const vh = window.screen.height / 100;

    canvas.id = "flortcanvas";
    canvas.width = "" + (90 * vw);
    canvas.height = "" + (80 * vh);
    
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    canvas.style.position = "fixed";
    canvas.style.top = "2vw";
    canvas.style.left = "5vw";

    let returnbutton = document.createElement("input");

    returnbutton.id = "flortinput";
    returnbutton.type = "button";
    returnbutton.value = "ﾃ�";
    returnbutton.setAttribute("onclick","deletecanvas()");
    
    body.appendChild(canvas);
    body.appendChild(returnbutton);
}

function deletecanvas() {
    const canvas = document.getElementById("flortcanvas");
    const input = document.getElementById("flortinput");

    if (canvas == null) {
        alert("canvas is null!");
    }
    if (input == null) {
        alert("input is null!");
    }

    canvas.remove();
    input.remove();
}
 

function get() {
     n = document.getElementById("po").value; 
     n = parseInt(n); 
   
    if (n >= 2 && n <= 31) { 
        window.location.href = "inbdex2.html?day=" + n; 
       
       
    }

}

function geta() {
    window.location.href = "index.html";
}



const urlParams = new URLSearchParams(window.location.search);
let nn = urlParams.get("day");
    let sehritime = [
        "05.04", "05.03", "05.02", "05.01", "05.00", "04.59", "04.58", "04.57", 
        "04.56", "04.55", "04.54", "04.53", "04.52", "04.51", "04.50", "04.49", 
        "04.48", "04.47", "04.46", "04.45", "04.44", "04.43", "04.42", "04.41", 
        "04.40", "04.39", "04.37", "04.36", "04.35", "04.34"
    ];

    let ifter = [
        "06.02", "06.03", "06.03", "06.04", "06.04", "06.05", "06.05", "06.06", 
        "06.06", "06.06", "06.07", "06.07", "06.08", "06.08", "06.08", "06.09", 
        "06.09", "06.10", "06.10", "06.10", "06.11", "06.11", "06.11", "06.12", 
        "06.12", "06.13", "06.13", "06.14", "06.14", "06.15"
    ];
    let newParagraph = document.createElement("p"); // Create <p> element
    newParagraph.textContent = "Sehri End Time:"+sehritime[nn-2]+" AM"; // Set text
    document.getElementById("text4").appendChild(newParagraph); 
   
     let newParagraph1 = document.createElement("p"); // Create <p> element
     newParagraph1.textContent = "Ifter time: "+ifter[nn-2]+" Pm"; 
      document.getElementById("text3").appendChild(newParagraph1);
   



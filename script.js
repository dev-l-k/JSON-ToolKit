function getJSON(id){
    return JSON.parse(document.getElementById(id).value);

}
function formatJSON(){
    try{
    let data = getJSON("jsonInput");
    let output= JSON.stringify(data,null,2);
    document.getElementById("jsonOutput").value = output;
    document.getElementById('formatStatus').innerHTML=`<span class="good">Valid JSON</span>`;
    }catch(err){
        document.getElementById('formatStatus').innerHTML = `<span>${err.message}</span>`;
    }
}
function loadDemo(){
    document.getElementById('jsonInput').value = `{"name":"Alex Rivera","age":29,"isDeveloper":true,"skills":["JavaScript","HTML","CSS"],"address":{"city":"Bengaluru","postalCode":"560001"},"projects":[{"id":101,"title":"JSON ToolKit","active":true},{"id":102,"title":"CLI Parser","active":false}],"notes":null}`;
}
async function copyOutput(){
    const text = document.getElementById('jsonOutput').value;
    await navigator.clipboard.writeText(text);
    alert("Output copied to clipboard..")
}
function downloadJSON(){
    let text = document.getElementById("jsonOutput").value;
    if(!text)return;
    let blob = new Blob([text],{type:"application/json"});
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.json";
    a.click();
    URL.revokeObjectURL(a.href);
}
function clearJSON(){
    document.getElementById("jsonInput").value ="";
    document.getElementById("jsonOutput").value = "";

}

function minifyJSON(){
    try{
        let data = getJSON("jsonInput");
        let output = JSON.stringify(data);
        document.getElementById('jsonOutput').value=output;
        document.getElementById("formatStatus").innerHTML=`<span class="good" > Minified Sucessfully</span>`; 
    }catch(e){
        document.getElementById("formatStatus").innerHTML=`<span>${e.message}</span>`;
    }
}
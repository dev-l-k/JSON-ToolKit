function getJSON(id){
    return JSON.parse(document.getElementById(id).value);

}
function formatJSON(){
    let data = getJSON("jsonInput");
    let output= JSON.stringify(data,null,2);
    document.getElementById("jsonOutput").value = output;
    document.getElementById('formatStatus').innerHTML=`<span class="good">Valid JSON</span>`;
}
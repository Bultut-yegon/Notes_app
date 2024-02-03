const container=document.querySelector('.note-container');
const createBtn=document.querySelector('.btn');
let notes= document.querySelectorAll('.inputBox');

function showNotes(){
    container.innerHTML = localStorage.getItem('notes');
}
showNotes();


function updateStorage(){
    localStorage.setItem('notes',container.innerHTML);
}

createBtn.addEventListener('click', ()=>{
    let input_box=document.createElement('put');
    let img=document.createElement('img');
    input_box.className="inputBox";
    input_box.setAttribute("contenteditable", "true");
    img.src='images/delete.jpeg';
    container.appendChild(input_box).appendChild(img);

})
container.addEventListener('click', function(e){
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==='inputBox'){
        notes = document.querySelectorAll(inputBox);
        notes.forEach(note=>{
            note.onkeyup = function(){
                updateStorage();
            }
        })

    }
})
document.addEventListener('keydown', event => {
    if (event.key=== 'Enter'){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
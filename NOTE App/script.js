
const notePage = document.querySelector(".note")
const button = document.querySelector(".Btn")
const main = document.querySelector("#main")

button.addEventListener("click", (e)=>{
    
    addNote()
})

function saveNotes(){
    const notes = document.querySelectorAll(".note textarea")
    // console.log(notes)
    let data = []
    notes.forEach((note)=>{
        data.push(note.value)
    })
    localStorage.setItem("allnote",JSON.stringify(data))
    // console.log(data)
}

(
    function(){
       const notess = JSON.parse(localStorage.getItem('allnote'))
        notess.forEach((lsnote)=>{
            
           addNote(lsnote)
           
        })
        
    }
)()



function addNote(text = ""){
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
                <i class="save fa-regular fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash-can"></i>
            </div>
            <textarea>${text}</textarea>
    `
   
    note.querySelector(".trash").addEventListener("click",()=>{
        note.remove()
        saveNotes()
    })
    
    note.querySelector(".save").addEventListener("click",()=>{
        saveNotes()
    })
    main.appendChild(note)
    saveNotes()
}


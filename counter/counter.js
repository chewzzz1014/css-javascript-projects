var countEl = document.getElementById("count-el")
var displayEl = document.getElementById("display-el")
var count = 0
var out =""

function increment(){
  count+=1
  countEl.innerText = count
}

function decrement(){
  count-=1
  countEl.innerText = count
}

function save(){
  out += count+"       "
   console.log(displayEl.textContent = out)
}


function clearAll(){
  countEl.textContent = 0
  displayEl.innerText = ""
  out=""
  count = 0
}

var button=document.querySelector("#butto");

var squares=document.querySelectorAll('th')

function clearall() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';
  }

}
button.addEventListener("click",clearall)

// var one=document.querySelectorAll('#one')
// one.addEventListener("click",function () {
//   one.textContent="X";
// })
// method2
function sign() {
  if (this.textContent==='') {
    this.textContent="X"
  }
  else if (this.textContent==='X') {
    this.textContent='O'
      }
      else {
        this.textContent=''
      }
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",sign)
}

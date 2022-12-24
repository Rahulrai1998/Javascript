// var body = document.body
// var bodyStyle = document.body.style
// bodyStyle.color = "white"
// body.style.backgroundColor = "grey"
// body.firstElementChild.firstElementChild.style.color = "red"

function OnMouseUp() {
  document.getElementById("FirstPara").innerHTML = `Released`;
}
function OnMouseDown() {
  document.getElementById("FirstPara").innerHTML = "Pressed";
}

function MouseEnter() {
  document.getElementById("mainbox").style.backgroundColor = "red";
}
function MouseLeave() {
  document.getElementById("mainbox").style.backgroundColor = "yellow";
}

const KeyPress = () => {
  document.getElementById("para").style.innerHTML = "New";
  // confirm(`${event.key} ${event.code}`)
  console.log(`${event.key} pressed`);
};

function KeyUp() {
  document.getElementById("para").style.innerHTML = "New";
  // confirm(`${event.key} ${event.code}`)
  console.log("KEyup");
  // document.getElementById('i').value =
}
function KeyDown() {
  document.getElementById("para").style.innerHTML = "New";
  // confirm(`${event.key} ${event.code}`)
  console.log("Key DOwn");
}

// const selectElement=()=>{
//     const name = document.getElementById('ice').value
//     const icecream = document.getElementById('icecreams').value
//     document.getElementById('result').innerHTML = `${name} selects ${icecream}`

// }

const icecream = document.getElementById("icecreams");

icecream.addEventListener("change", () => {
  const name = document.getElementById("ice").value;
  const icecream = document.getElementById("icecreams").value;
  document.getElementById("result").innerHTML = `${name} selects ${icecream}`;
});

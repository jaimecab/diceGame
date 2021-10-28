


let randomNumber1 = Math.floor((Math.random()*6)+1)
let randomNumber2 = Math.floor((Math.random()*6)+1)

let image1 = document.querySelector(".img1")
let image2 = document.querySelector(".img2")

image1.setAttribute("src","images/dice"+randomNumber1+".png")
image2.setAttribute("src","images/dice"+randomNumber2+".png")


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "✌️ Player 1 wins"
}
  else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins ✌️"
  }
  else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "😲 It's a Draw 😲"
  }

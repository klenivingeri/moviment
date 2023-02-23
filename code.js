// function digimons(data) {
//   console.log(data)
// }
// fetch('https://digimon-api.vercel.app/api/digimon')
//   .then(response => response.json())
//   .then(data => digimons(data))
//   .catch(error => console.log('Api não localizada'));

let box = document.getElementById('box')
let tela = document.getElementById('tela')
lado = 0
let direction = ''
let cordenadas = box.getBoundingClientRect()
let countJump = 0
let countBackNext = 0
const jump = {
  countJump: 0,
  countTop: 0,
  negative: 1,
  start(op) {
    clearInterval(this.timerJump);
    this.status = 'Running';
    this.timerJump = setInterval(() => {

      if (this.countTop <= 8000 ) {
        this.countTop = this.countTop + 100
        this.countJump = this.countJump + 10
        box.style.bottom = this.countJump;
        box.classList.remove("rightp")
        box.classList.remove("leftp")
        if (direction == 'KeyD') {
          box.classList.add("rightp")
          box.classList.remove("leftp")
        } else if (direction == 'KeyA') {
          box.classList.remove("rightp")
          box.classList.add("leftp")
        }
      } else {
        if (direction == 'KeyD') {
          box.classList.add("rightd")
          box.classList.remove("leftd")
        } else if (direction == 'KeyA') {
          box.classList.remove("rightd")
          box.classList.add("leftd")
        }
        box.classList.remove("rightp")
        box.classList.remove("leftp")
        this.countJump = this.countJump - 10
        box.style.bottom = this.countJump;
        box.classList.remove("jump")
        if (this.countJump == 0) {
          this.countTop = 0
        box.classList.remove("rightd")
        box.classList.remove("leftd")

          clearInterval(this.timerJump);
        }

      }

    }, 20);
  },
  pause() {
    clearInterval(this.timerJump);

  },
};

const backNext = {
  countJump: 0,
  countTop: 0,
  negative: 1,
  start() {
    clearInterval(this.timerJump);
    this.status = 'Running';
    this.timerJump = setInterval(() => {

      if (direction == 'KeyD') {
        this.countTop = this.countTop + 100
        this.countJump = this.countJump + 4
        box.style.left = this.countJump;
        box.classList.add("right")
        box.classList.remove("left")
        let pegaWidht = box.style.left
 
        if(tela.clientWidth < 90 + parseInt(pegaWidht.slice(0, -2))){
          direction = 'KeyA'
        }
         
      }
      if (direction == 'KeyA') {
        this.countJump = this.countJump - 4
        box.style.left = this.countJump;
        box.classList.remove("right")
        box.classList.add("left")
        let pegaWidht = box.style.left
        if(0 > pegaWidht.slice(0, -2)){
          direction = 'KeyD'
        }
      }
    }, 20);
  },
  pause() {
    clearInterval(this.timerJump);
  },
};

//jump.start()
let box2 = box.getBoundingClientRect()

document.addEventListener('keypress', (event) => {
  const keyName = event.code;
  if (keyName == 'KeyD') {
    direction = 'KeyD'
    backNext.start()

  }
  if (keyName == 'KeyA') {
    direction =  'KeyA'
    backNext.start()
  }

  if (keyName == 'Space') {
    jump.start(lado)
  }
});




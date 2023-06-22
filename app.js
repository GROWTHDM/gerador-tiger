





























let button = document.getElementById('geradorbotao');
let output = document.getElementById('entrada');
let output2 = document.getElementById('turbo');
let output3 = document.getElementById('validade');


function getRandomNumber(min, max) {
    let step2 = (Math.random() * (max - min + 1) + min);
    let result = Math.floor(step2);
    return result;

}

button.addEventListener('click', () => {
    output.innerText = getRandomNumber(5, 10);
})

function getRandomNumber(min, max) {
    let step3 = (Math.random() * (max - min + 1) + min);
    let result = (Math.floor(step3) + 'X');

    return result;
}

button.addEventListener('click', () => {
    output2.innerText = getRandomNumber(5, 10);
})

function updateTime() {
  let time = dayjs();
  let newTime = time.add(2, 'm');
  return (newTime.format("HH:mm"));


}

button.addEventListener('click', () => {
    output3.innerText = updateTime();
})
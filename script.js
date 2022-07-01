const countdownEl = document.getElementById("countdown");

const startTimer = (min) => {
  let startingMinutes = min;
  let time = startingMinutes * 60;

  setInterval(() => {
    let seconds = time % 60;
    const minutes = Math.floor(time / 60);
    time--;

    // if (seconds < 10) {
    //  console.log(`${minutes}:0${seconds}`);
    // } else if (minutes < 10) {
    //   console.log(`0${minutes}:${seconds}`); WORKS ON CONSOLE
    // } else {
    //   console.log(`${minutes}:${seconds}`);
    // }

    // console.log(countdown);

    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds;
    }

    countdownEl.innerHTML = `${minutes}:${seconds}`;
  }, 1000);
};

startTimer(10.2);

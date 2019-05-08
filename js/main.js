const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setDate = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hoursDegree = (hours / 12) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const secondsDegree = (seconds / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  console.log(`${hours} : ${minutes} : ${seconds}`);
};

setInterval(setDate, 1000);

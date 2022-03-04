
const URL = "https://api.adviceslip.com/advice";
const advice = document.querySelector('.advice');
const button = document.querySelector('.button');

// To fetch an advice
const fetchAdvice = async () => {
  const response = await fetch(`${URL}`);
  const data = await response.json();

  console.log(data.slip.id);
  console.log(data.slip.advice);
  // Need to fetch the id and the advice

  showAdvice(data);
};

fetchAdvice();

const showAdvice = (data) => {
  const adviceHTML = `
    <h1>Advice #${data.slip.id}</h1>
    <p>${data.slip.advice}</p>
  `;
  advice.innerHTML = adviceHTML;
};

button.addEventListener('click', (evt) => {
  evt.preventDefault();

  fetchAdvice();
});

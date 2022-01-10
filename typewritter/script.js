function typeWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, 80 * i)
  });
};

const writeTitle = document.querySelector('.title');
typeWriter(writeTitle);
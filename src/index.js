export const paintCards = () => {
  const arr = [...document.getElementsByClassName('item')];
  arr.map((item, index) => {
    if (index % 2 === 0) {
      return (item.style.backgroundColor = 'red');
    }
  });
};

export const findElement = () => {
  let item = document.querySelector('li');
  for (let i = 0; i < document.querySelectorAll('li').length; i++) {
    if (item.classList.contains('likedItem')) {
      item.style.backgroundColor = 'blue';
    } else {
      item = item.nextElementSibling;
    }
  }
};
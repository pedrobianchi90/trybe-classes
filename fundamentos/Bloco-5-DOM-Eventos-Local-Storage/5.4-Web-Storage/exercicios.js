window.onload = function () {
  let select = document.querySelector('select');
  select.addEventListener('change', function () {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;

    localStorage.setItem('5.4-background-color', selected.value)
  })

  let fontSize = document.querySelector('input[name="font-size"]');
  fontSize.addEventListener('change', function () {
    let text = document.querySelector('p');
    text.style.fontSize = `${fontSize.value}px`;

    localStorage.setItem('5.4-font-size', `${fontSize.value}px`)
  })

  let savedBackgroundColor = localStorage.getItem('5.4-background-color');
  document.body.style.backgroundColor = savedBackgroundColor;

  let savedFontSize = localStorage.getItem('5.4-font-size');
  let text = document.querySelector('p');
  text.style.fontSize = savedFontSize;
}
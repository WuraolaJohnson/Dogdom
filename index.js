// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Dogs can be trained to smell diseases in humans, including certain types of cancer and diabetes. ', 'success')
//   })
// }


const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `  <div>${message}</div>`,
    '  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
};

// Array of words to choose from
const randomWords = [
  "A dog's nose print is as unique as a human's fingerprint and can be used for identification.",
  "Dogs can be trained to detect cancer and other diseases in humans by smelling specific compounds.",
  "A dog's sense of smell is at least 10,000 to 100,000 times more acute than a human's.",
  "Dogs curl up when they sleep to stay warm and to protect their vital organs.",
  "A dog's whiskers are not just for show; they are sensitive tactile hairs that help them \"see\" in the dark.",
  "The Norwegian Lundehund is a breed with six toes on each foot, a trait that helped it climb rocky cliffs to hunt puffins."
];

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    // Select a random word from the array
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    const randomWord = randomWords[randomIndex];

    // Pass the random word to the appendAlert function
    appendAlert(`${randomWord}`, 'success');
  });
}
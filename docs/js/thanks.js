// the sequence
const nothanksCode = ['t', 'h', 'a', 'n', 'k', 's'];

// a variable to remember the 'position' the user has reached so far.
let nothanksCodePosition = 0;

function activateWut() {
  // @ts-ignore
  document.body.style.backgroundImage = window.whyyyyy;
  document.body.style.backgroundSize = 'cover';

  const elements = [
    document.getElementById('wholesite'),
    ...document.getElementsByTagName('p'),
    ...document.getElementsByTagName('ul'),
  ];

  for (const ele of elements) {
    if (ele != null) {
      ele.style.cssText = 'color:white !important';
    }
  }

  document.getElementsByTagName('footer')[0].style.cssText =
    'background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 45%) !important; color:white !important';

  // @ts-ignore
  document.getElementsByClassName('one')[0].style.cssText =
    'box-shadow: -20px 20px 60px #000000, 20px -20px 60px #000000 !important';
  // @ts-ignore
  document.getElementsByClassName('two')[0].style.cssText =
    'box-shadow: -20px 20px 60px #000000, 20px -20px 60px #000000 !important';

  // @ts-ignore
  document.getElementsByClassName('subtitle')[0].style.cssText =
    'color:white !important; opacity: 50%';
}

// add keydown event listener
document.addEventListener('keydown', (e) => {
  // get the value of the required key from the code
  const requiredKey = nothanksCode[nothanksCodePosition];

  // compare the key with the required key
  if (e.key === requiredKey) {
    // move to the next key in the  sequence
    nothanksCodePosition += 1;

    // if the last key is reached, activate wut
    if (nothanksCodePosition === nothanksCode.length) {
      activateWut();
      nothanksCodePosition = 0;
    } else if (nothanksCodePosition === 2) {
      const preload = document.getElementById('preloadimg');
      if (preload != null) {
        preload.classList.add('now');
      }
    }
  } else {
    nothanksCodePosition = 0;
  }
});

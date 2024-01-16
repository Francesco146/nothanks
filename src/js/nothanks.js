// @ts-ignore
const { Typed } = window;

const typed2 = new Typed('#strike', {
  strings: [
    'thanks',
    'thank you',
    'grazie',
    'thx',
    'thanks a lot',
    'merci',
    'danke',
    'gracias',
    'thank you so much',
    'dank je',
    'спасибо',
    'धन्यवाद',
    'obrigado',
    'شكرا',
    '감사합니다',
    '谢谢',
    'ありがとう',
    'köszönöm',
    'благодаря',
    'ďakujem',
    'شکریہ',
    'akpe',
    'kop khun mak kha',
    'xie xie',
    'misaotra',
    'monari',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}

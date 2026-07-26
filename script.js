const track = document.querySelector('#galleryTrack');
const cards = [...track.children];
let index = 0;
function cardWidth(){ return cards[0].offsetWidth + 18; }
function show(next){ index = (next + cards.length) % cards.length; track.style.transform = `translateX(${-index * cardWidth()}px)`; }
setInterval(() => show(index + 1), 4300);
addEventListener('resize', () => show(index));
document.querySelector('#year').textContent = new Date().getFullYear();

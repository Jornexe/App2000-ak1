const menuButton = document.querySelector('#menuButton');
const sidebar = document.querySelector('#sidebar');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const cards = [...document.querySelectorAll('.trail-card')];
const resultCount = document.querySelector('#resultCount');

menuButton.addEventListener('click', () => sidebar.classList.toggle('open'));

document.querySelectorAll('.save').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('saved');
    button.textContent = button.classList.contains('saved') ? '♥' : '♡';
  });
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-link.active')?.classList.remove('active');
    link.classList.add('active');
    sidebar.classList.remove('open');
  });
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const visibleCards = cards.filter((card) => {
    const matches = !query || card.dataset.search.includes(query);
    card.hidden = !matches;
    return matches;
  });
  resultCount.textContent = `${visibleCards.length} ${visibleCards.length === 1 ? 'tur' : 'turer'} i nærheten`;
});

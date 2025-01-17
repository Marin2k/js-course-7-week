import { perms } from './utils';
import './style.css'; // Импорт CSS через Vite

// Получаем элементы из HTML
const input = document.getElementById('numbers') as HTMLInputElement;
const button = document.getElementById('generate') as HTMLButtonElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

// Добавляем событие для кнопки
button.addEventListener('click', () => {
  // Читаем данные из поля ввода
  const numbers = input.value
    .split(',')
    .map((num) => parseInt(num.trim(), 10))
    .filter((num) => !isNaN(num)); // Убираем некорректные данные

  if (numbers.length === 0) {
    resultDiv.innerHTML = '<p>Введите хотя бы одно число!</p>';
    return;
  }

  // Генерируем перестановки
  const permutations = perms(numbers);

  // Выводим результат в HTML (горизонтально)
  resultDiv.innerHTML = `
    <div class="result-list">
      ${permutations
        .map(
          (perm) =>
            `<div class="result-item">[${perm.join(', ')}]</div>`
        )
        .join('')}
    </div>
  `;
});

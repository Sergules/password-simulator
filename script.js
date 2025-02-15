// script.js
const passwordInput = document.getElementById('passwordInput');
const strengthMeter = document.getElementById('strengthMeter');
const feedback = document.getElementById('feedback');

passwordInput.addEventListener('input', () => {
  const result = zxcvbn(passwordInput.value);
  
  strengthMeter.style.width = `${result.score * 25}%`;
  strengthMeter.style.backgroundColor = getColor(result.score);
  
  feedback.innerHTML = `
    <p>Estimated cracks: ${result.crack_times_display.online_no_throttling_10_per_second}</p>
    ${result.feedback.warning ? `<p>⚠️ ${result.feedback.warning}</p>` : ''}
  `;
});

function getColor(score) {
  const colors = ['#ff0000', '#ff5e00', '#ffbb00', '#aaff00', '#00ff00'];
  return colors[score];
}
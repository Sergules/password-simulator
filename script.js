// script.js
const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.querySelector('.strength-bar');
const feedback = document.getElementById('feedback');
const scoreNumber = document.getElementById('scoreNumber');

passwordInput.addEventListener('input', () => {
  const result = zxcvbn(passwordInput.value);
  
  strengthBar.style.width = `${result.score * 25}%`;
  strengthBar.style.backgroundColor = getColor(result.score);
  
  scoreNumber.textContent = result.score;
  
  feedback.innerHTML = `
    <div class="feedback-item">
      <svg class="feedback-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>${result.feedback.warning || 'No major issues found'}</span>
    </div>
    <div class="feedback-item">
      <svg class="feedback-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>Crack time: ${result.crack_times_display.online_no_throttling_10_per_second}</span>
    </div>
  `;
});

function getColor(score) {
  return [
    'var(--danger)',   // 0
    'var(--danger)',   // 1
    'var(--warning)',  // 2
    'var(--success)',  // 3
    'var(--success)'   // 4
  ][score];
}

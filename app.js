const textarea = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxChars = 250;

textarea.addEventListener('input', function() {
  const currentLength = textarea.value.length;
  charCount.textContent = currentLength;

  if (currentLength >= maxChars) {
    textarea.classList.add('limit-reached');
  } else {
    textarea.classList.remove('limit-reached');
  }
});

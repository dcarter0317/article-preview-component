const shareBTN = document.querySelector('#shareBtn');
const shareModal = document.querySelector('#shareModal');
const articlePreviewCTA = document.querySelector('.article-preview__cta');

shareBtn.addEventListener('click', openShareModal);

function openShareModal(e) {
  shareModal.classList.toggle('active');
  articlePreviewCTA.classList.toggle('active');
  e.preventDefault();
}
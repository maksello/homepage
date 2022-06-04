function spoiler() {
  var ele = document.getElementById('content');
  var text = document.getElementById('link');
  if (ele.style.display == 'block') {
    ele.style.display = 'none';
    text.innerHTML = '<img src="favicon.ico" alt="">';
  } else {
    ele.style.display = 'block';
    text.innerHTML = '<img src="faviconUp.ico" alt="">';
  }
}

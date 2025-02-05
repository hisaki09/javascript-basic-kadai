
const addBtn = document.getElementById('btn');

const parentList = document.getElementById('text');


addBtn.addEventListener('click', () => {
    

  // li要素を新しく作成する
  const childList = document.createElement('text');

  childList.textContent = 'ボタンをクリックしました';

  parentList.removeChild(parentList.firstChild);
  parentList.appendChild(childList);

});


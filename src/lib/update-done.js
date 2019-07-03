const showUpdateMsg = text => {
  const notifyContainer = document.getElementById('notify');
  const msg = document.createElement('span');
  notifyContainer.appendChild(msg);
  if (text === 'done') {
    msg.innerHTML = 'Данные обновлены';
    msg.className = 'msg-done';
  } else if (text === 'error') {
    msg.innerHTML = 'ОШИБКА обновления!';
    msg.className = 'msg-error';
  }
  setTimeout(() => {
    notifyContainer.innerHTML = '';
  }, 3000);
};

export default showUpdateMsg;

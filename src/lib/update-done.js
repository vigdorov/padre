const showUpdateMsg = text => {
  const notifyContainer = document.getElementById('notify');
  notifyContainer.innerHTML = text;
  setTimeout(() => {
    notifyContainer.innerHTML = '';
  }, 3000);
};

export default showUpdateMsg;

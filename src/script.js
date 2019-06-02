/*

Описать возможности будущего приложения:
1. Добавлять, редактировать, удалять магазины (данные сохраняются в памяти)
2. У магазинов есть дата последнего ТО и поле с комментариями о ТО

 */

const STATE = {
  listShops: [
    {id: 234, address: 'Гатчина'},
    {id: 342, address: 'Москва'},
    {id: 232, address: 'Питер'},
  ],
  getStorage: function () {
    let local = localStorage.getItem('shops');
    STATE.listShops = JSON.parse(local) || [];
  },
  setStorage: function () {
    let shops = JSON.stringify(STATE.listShops);
    localStorage.setItem('shops', shops);
  }
};

function View () {
  STATE.getStorage();
  let ul = document.getElementById('app-list');
  ul.innerHTML = '';

  for (let i = 0; i < STATE.listShops.length; i++) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    ul.appendChild(li);

    let h5 = document.createElement('h5');
    li.appendChild(h5);

    let id = document.createElement('span');
    id.className = 'badge badge-secondary';
    id.textContent = STATE.listShops[i].id;
    h5.appendChild(id);

    let address = document.createTextNode(' ' + STATE.listShops[i].address + ' ');
    h5.appendChild(address);

    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-outline-danger btn-sm';
    delBtn.innerHTML = '&times;';
    h5.appendChild(delBtn);
    delBtn.addEventListener('click', () => {
      STATE.listShops.splice(i, 1);
      STATE.setStorage();
      View();
    });
  }
}

function Controller () {
  let addButton = document.getElementById('add-modal'),
      idInput = document.getElementById('add-id'),
      addressInput = document.getElementById('add-address');

  addButton.addEventListener('click', () => {
    STATE.listShops.push({
      id: idInput.value,
      address: addressInput.value
    });
    STATE.setStorage();
    View();
  });
}

View();
Controller();

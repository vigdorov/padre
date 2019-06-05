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

    let text = document.createTextNode(' ');
    h5.appendChild(text);

      let editBtn = document.createElement('button');
      editBtn.className = 'btn btn-outline-success btn-sm';
      editBtn.textContent = 'Edit';
      h5.appendChild(editBtn);
      editBtn.setAttribute('data-toggle','modal');
      editBtn.setAttribute('data-target', '#exampleModalCenter');
      editBtn.addEventListener('click', () => {
          document.getElementById('modal-title').textContent = 'Редактировать';
          let idInput = document.getElementById('add-id'),
              addressInput = document.getElementById('add-address'),
              addModalButton = document.getElementById('add-modal');
          idInput.value = STATE.listShops[i].id;
          addressInput.value = STATE.listShops[i].address;
          addModalButton.textContent = 'Изменить';
          addModalButton.classList.remove('btn-primary');
          addModalButton.classList.add('btn-warning');
          addModalButton.onclick = function () {
              STATE.listShops[i].id = idInput.value;
              STATE.listShops[i].address = addressInput.value;
              STATE.setStorage();
              View ();
          };
      });

      let text2 = document.createTextNode(' ');
      h5.appendChild(text2);

      let collapseBtn = document.createElement('button');
      collapseBtn.className = 'btn btn-primary btn-sm';
      collapseBtn.textContent = 'Добавить событие';
      h5.appendChild(collapseBtn);
      collapseBtn.setAttribute('data-toggle','modal');
      collapseBtn.setAttribute('data-target', '.bd-example-modal-xl');

      let dangerUl = document.createElement('ul');
    dangerUl.className = 'danger-list list-group list-group-horizontal-md right';
    h5.appendChild(dangerUl);
    let dangerLi = document.createElement('li');
      dangerLi.className = 'list-group-item time-width list-group-item-danger';
      dangerLi.textContent = '06.06.2019 16:20';
      dangerUl.appendChild(dangerLi);
      let warningLi = document.createElement('li');
      warningLi.className = 'list-group-item time-width list-group-item-warning';
      warningLi.textContent = '08.06.2019 12:20';
      dangerUl.appendChild(warningLi);
      let infoLi = document.createElement('li');
      infoLi.className = 'list-group-item time-width list-group-item-info';
      infoLi.textContent = '10.06.2019 12:20';
      dangerUl.appendChild(infoLi);
      let lightLi = document.createElement('li');
      lightLi.className = 'list-group-item time-width list-group-item-light';
      lightLi.textContent = '24.06.2019 12:20';
      dangerUl.appendChild(lightLi);
        }
}

function Controller () {
  let addModalButton = document.getElementById('add-modal'),
      addButton = document.getElementById('add-btn'),
      idInput = document.getElementById('add-id'),
      addressInput = document.getElementById('add-address'),
      title = document.getElementById('modal-title');

  addButton.addEventListener('click', () => {
      title.textContent = 'Добавить магазин';
      idInput.value = '';
      addressInput.value = '';
      addModalButton.textContent = 'Добавить магазин';
      addModalButton.classList.remove('btn-warning');
      addModalButton.classList.add('btn-primary');
      addModalButton.onclick = function () {
          STATE.listShops.push({
              id: idInput.value,
              address: addressInput.value
          });
          STATE.setStorage();
          View();
      };
  });


}

View();
Controller();

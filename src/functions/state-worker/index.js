const StateWorker = (function () {
  let clearTasks = (date) => {
    return {
      to: {
        date: date,
        check: false,
        desc: ''
      },
      order: {
        low: [],
        normal: [],
        high: []
      }
    };
  };


  return {
    createShop: function (state, shop) {
      let newStateShops = state.shops.slice();
      newStateShops.push({
        id: shop.id,
        address: shop.address,
        tasks: clearTasks(shop.to)
      });
      return newStateShops;
    },
    editShop: function (state, shop) {
      let newStateShops = state.shops.slice(),
          i = state.editIndex,
          newShop = newStateShops[i];

      let { id, address, to } = shop;
      newShop.id = id;
      newShop.address = address;
      newShop.tasks.to.date = to;

      return newStateShops;
    },
  };
})();

export default StateWorker;
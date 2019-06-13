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
      let newShops = state.shops.slice();
      newShops.push({
        id: shop.id,
        address: shop.address,
        tasks: clearTasks(shop.to)
      });
      return newShops;
    },
  };
})();

export default StateWorker;
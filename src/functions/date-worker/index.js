const dateWorker = (function () {

  return {
    now: function () {
      let date = new Date(),
          day = String(date.getDate()),
          month = String(date.getMonth() + 1),
          year = String(date.getFullYear());

      if (day.length < 2) {
        day = '0' + day;
      }

      if (month.length < 2) {
        month = '0' + month;
      }

      return (day + '.' + month + '.' + year);
    },
    getDay: function (date) {
      return date[0] + date[1];
    },
    getMonth: function (date) {
      return date[3] + date[4];
    },
    getYear: function (date) {
      return date[6] + date[7] + date[8] + date[9];
    },
    parseDate: function (date) {
      let day = Number(this.getDay(date)),
          month = Number(this.getMonth(date)) - 1,
          year = Number(this.getYear(date));

      return new Date(year, month, day);
    },
    isFuture: function (date) {
      let result = true,
          currentDate = new Date(),
          cameDate = this.parseDate(date);

      if (cameDate < currentDate) {
        result = false;
      }

      return result;
    },
    isPast: function (date) {
      let result = true,
        currentDate = new Date(),
        cameDate = this.parseDate(date);

      if (cameDate > currentDate) {
        result = false;
      }

      return result;
    },
  };
})();

export default dateWorker;
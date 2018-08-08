export default {
  formateDate(time) {
    if (!time) return "";
    let date = new Date(time);
    console.log();
    if (date.getMinutes() < 10) {
      return (
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        "  " +
        date.getHours() +
        ":0" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
 
    } else if (date.getSeconds() < 10) {
      return (
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        "  " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":0" +
        date.getSeconds()
      );
    }
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      "  " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  }
};

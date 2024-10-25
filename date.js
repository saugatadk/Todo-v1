exports.getDate = function () {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  const day = today.toLocaleDateString("en-US", options);

  return day;
};

exports.getDay = function () {
  const options = {
    weekday: "long",
  };
  const today = new Date();
  const day = today.toLocaleDateString("en-US", options);

  return day;
};

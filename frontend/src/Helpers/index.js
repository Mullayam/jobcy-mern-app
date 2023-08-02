import moment from "moment";

export const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
export const LastElement = (el) => {
  return el.split("-").pop();
};
export const CreateTitle = (slug) => {
  var words = slug.split("-");
  let Title = [];
  for (var i = 0; i < words.length - 1; i++) {
    var word = words[i];
    Title[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return Title.join(" ");
};
export const FormatDate = (date) => {
  return moment(date).format("MMMM d, YYYY");
};
export const FromNowDate = (date) => {
  return moment(date).fromNow();
};
export const LabelAndValueFormat = (value) => {
  const T = value.map((c) => {
    const { id: value, name: label } = c;
    return { label, value };
  });
  return T;
};
export const CovertArraytoSelectFormat = (value) => {
  const T = value.map((c) => {
    return { label: c, value: c };
  });

  return T;
};
export const ObjectQueryToSearchString = (str) => {
  return Object.keys(str)
    .map((key) => `${key}=${str[key]}`)
    .join("&");
};
 
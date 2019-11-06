export const today3 = () => {
  console.log('Jerry Mongoloid');
};
today3();

const getCurrentDate = () => {
  console.log('yow');
  return new Date();
};

const today = getCurrentDate();
const today2 = getCurrentDate();

console.log(today);
console.log(today2);

const OneToTen = (n = 1) => {
  if (n > 10) return;
  console.log(n);
  n++;
  OneToTen(n);
};
OneToTen();

export const CalculateRating = reviews => {
  let ratingsTotal = 0;
  let ratingsCount = 0;
  for (let i = 0; i < reviews.length; i++) {
    ratingsTotal += reviews[i].rating;
    ratingsCount += 1;
  }
  let rating = ratingsTotal / ratingsCount;
  return isNaN(rating) ? 0 : rating;
};

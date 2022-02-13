let rating = 1;
function fill(element) {
  const starPos = Number(element.id.slice(-1));
  for (let i = rating; i <= starPos; i++)
    document.getElementById(`star-${i}`).src =
      'https://img.icons8.com/material-sharp/24/000000/star--v1.png';
}

function unfill(element) {
  const starPos = Number(element.id.slice(-1));
  for (let i = rating + 1; i <= starPos; i++)
    document.getElementById(`star-${i}`).src =
      'https://img.icons8.com/windows/32/000000/star--v1.png';
}

function rate(element) {
  const starPos = Number(element.id.slice(-1));
  rating = starPos;

  // status
  document.getElementsByClassName(
    'rating-status'
  )[0].innerText = `Star rating: ${rating} stars`;

  // fill
  for (let i = 1; i <= rating; i++)
    document.getElementById(`star-${i}`).src =
      'https://img.icons8.com/material-sharp/24/000000/star--v1.png';

  // unfill
  for (let i = rating + 1; i <= 5; i++)
    document.getElementById(`star-${i}`).src =
      'https://img.icons8.com/windows/32/000000/star--v1.png';
}

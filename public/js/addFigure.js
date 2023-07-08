console.log('IN ADD FIGURE JS');
// const addFigureBTN = document.querySelector('.addFigure-btn');

// addFigureBTN.addEventListener('click', () => {
//   const figureName = document.querySelector('.figure-name').textContent;
//   const figureSaga = document.querySelector('.figure-saga');
//   const figureType = document.querySelector('.figure-type');
//   const figureYear = document.querySelector('.figure-year');

//   console.log('FIGURE TITLE', figureName);
// });

const cardContainer = document.getElementById('cardsContainer');

// Add event listener to the card container
cardContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('addFigureBtn')) {
    const card = event.target.parentNode;
    const aboveCard = card.parentNode;
    // Get the parent card element
    const imageEL = aboveCard.querySelector('#figureImage');
    const image = imageEL.getAttribute('src');
    // const imageEL = card.querySelector('img');
    const name = card.querySelector('h5').textContent; // Get the h5 element
    const saga = card.querySelector('.figure-saga').textContent;
    const type = card.querySelector('.figure-type').textContent;
    const year = card.querySelector('.figure-year').textContent;

    //   console.log(aboveCard);

    console.log(image);
    console.log(name);
    console.log(saga);
    console.log(type);
    console.log(year);

    // const formData = new FormData();

    // formData.append('image', image);
    // formData.append('name', name);
    // formData.append('saga', saga);
    // formData.append('type', type);
    // formData.append('year', year);

    // console.log(formData);
    // console.log(formData.length);
    // console.log(formData[0]);

    const response = await fetch('/api/users/addToCollection', {
      method: 'POST',
      body: JSON.stringify({ name, saga, type, image, year }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('success');
    } else {
      alert('error');
    }

    // Output: Card 1 Heading (or Card 2 Heading, depending on the clicked card)

    // Perform further operations with the heading text
  }
});

'use strict';
const uploads = document.getElementById('uploads');
const body = document.getElementById('main');

const showImages = (data) => {
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  data.forEach((file) => {

    // create elements for page as constants
    const figcap = document.createElement('figcaption');
    const hoo3 = document.createElement('h1');
    const kuva = document.createElement('figure');
    const lista = document.createElement('li');
    const aelem = document.createElement('a');
    const imagee = document.createElement('img');
    // constants for file, thumb url, and title fetched from json
    const fileUrl = file.mediaUrl;
    const fileThumb = file.mediaThumb;
    const title = file.mediaTitle;
    // set urls for image and thumbnail and insert title for <h3>
    aelem.setAttribute('href', 'files/uploads/' + fileUrl);
    imagee.setAttribute('src', 'files/uploads/' + fileThumb);
    imagee.setAttribute('width', '200');
    imagee.setAttribute('height', '200');
    hoo3.innerHTML = title;
    // append all the elements
    figcap.appendChild(hoo3);
    aelem.appendChild(imagee);
    kuva.appendChild(aelem);
    kuva.appendChild(figcap);
    lista.appendChild(kuva);
    body.appendChild(lista);

  });
};

// fetch json data with showImages function
fetch('./images.json').then(response => {
  return response.json();
}).then(data => {
  showImages(data);
});



const showPics= () => {
  const showImages = (data) => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    data.forEach((file) => {

      // create elements for page as constants
      const figcap = document.createElement('figcaption');
      const hoo3 = document.createElement('h1');
      const kuva = document.createElement('figure');
      const lista = document.createElement('li');
      const aelem = document.createElement('a');
      const imagee = document.createElement('img');
      // constants for file, thumb url, and title fetched from json
      const fileUrl = file.mediaUrl;
      const fileThumb = file.mediaThumb;
      const title = file.mediaTitle;
      // set urls for image and thumbnail and insert title for <h3>
      aelem.setAttribute('href', 'files/uploads/' + fileUrl);
      imagee.setAttribute('src', 'files/uploads/' + fileThumb);
      imagee.setAttribute('width', '200');
      imagee.setAttribute('height', '200');
      hoo3.innerHTML = title;
      // append all the elements
      figcap.appendChild(hoo3);
      aelem.appendChild(imagee);
      kuva.appendChild(aelem);
      kuva.appendChild(figcap);
      lista.appendChild(kuva);
      body.appendChild(lista);

    });
  };

// fetch json data with showImages function
  fetch('./images.json').then(response => {
    return response.json();
  }).then(data => {
    showImages(data);
  });

};

//profile



const profileHTML = () =>{
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  const user = document.createElement('H1');
  user.innerText = 'Username';

  const description = document.createElement('H1');
  description.innerText = 'aofylbauieyrgf leuryglbiuaebrasdasfeafaefaefgc ida.fliyhaöfd';

  body.appendChild(user);
  body.appendChild(description);

};
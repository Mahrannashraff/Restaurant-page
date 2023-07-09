const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const page = document.createElement('div');
    page.classList.add('page-content');

    //create header
    const header = document.createElement('h1');
    header.textContent='Welcome to our restaurant!';
    page.appendChild(header);

    //create the image
    const image = document.createElement('img');
    image.src = 'https://hotels.elgouna.com/wp-content/uploads/2023/01/Steigenberger_hotel_El_Gouna_Restaurant_Harumaki.jpg'
    page.appendChild(image);

    //create the paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent ='Welcome to our restaurant, where we serve the most delicious food made with fresh, locally sourced ingredients in a warm and inviting atmosphere. Experience the flavors that will leave you wanting more.';
    page.appendChild(paragraph)

    content.appendChild(page);
}


export default createRestaurantHomePage;
import createRestaurantHomePage from "./restaurant";
import createMenu from "./menu";
import createContactUS from "./contact";

const createTabs = () => {
    const content = document.querySelector('#content');
    const tabsDiv = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    tabsDiv.classList.add('tabs');
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab')

    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact Us";

    tabsDiv.appendChild(div1);
    tabsDiv.appendChild(div2);
    tabsDiv.appendChild(div3);

    content.appendChild(tabsDiv);
    
    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });
    div2.addEventListener('click', () => {
        clearContent();
        createMenu();
    });
    div3.addEventListener('click', () => {
        clearContent();
        createContactUS();
    });
}

function clearContent () {
    const content = document.querySelector('#content');
    const page = document.querySelector('.page-content');
    if(page){
        content.removeChild(page);
    }
}


export default createTabs;
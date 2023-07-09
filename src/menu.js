const createMenu = () =>{
    const content = document.querySelector('#content');
    const page = document.createElement('div');
    page.classList.add('page-content');

    //create menu 
    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = "Our Menu";

    //menu list
    const menuList = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.textContent = "Alfredo";
    const item2 = document.createElement('li');
    item2.textContent = "Mac cheese";
    const item3 = document.createElement('li');
    item3.textContent = "Bolognesa";

    menuList.appendChild(item1);
    menuList.appendChild(item2);
    menuList.appendChild(item3);
    page.appendChild(menuHeader)
    page.appendChild(menuList);
    content.appendChild(page);
}

export default createMenu;
const createContactUS = () => {
    const content = document.querySelector('#content');
    const page = document.createElement('div');
    page.classList.add('page-content');
    
    //create a form 
    const form = document.createElement('from');
    form.classList.add('contact-from');

    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    label1.textContent = 'E-mail';
    input1.type='text';
    input1.placaholder = 'Enter your E-mail please';
    form.appendChild(label1);
    form.appendChild(input1);

    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    label2.textContent = 'Phone Number';
    input2.type='number';
    input2.placaholder = 'Enter your number please';
    form.appendChild(label2);
    form.appendChild(input2);

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.value = "Submit";
    form.appendChild(submitButton);

    page.appendChild(form);
    content.appendChild(page);
}

export default createContactUS;
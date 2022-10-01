document.addEventListener('DOMContentLoaded', function (){

    let name = document.getElementById('name');
    name.innerHTML = 'Kelvin'

    //Create a reference since javascript indicates days and months i digits and not in words
    months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        
    ]
      
    //The current date
    const today = new Date ();
    const hapa = today.getDate();
    document.getElementById('date').innerHTML = hapa ;

    //The current day
    const leo = today.getDay();
    const sasa = days[leo];
    document.getElementById('today').innerHTML = sasa;
    

    //The current month
    const mwezi = today.getMonth();
    const halisi = months[mwezi];
    document.getElementById('month').innerHTML = halisi;

    //The current year
    const mwaka = today.getFullYear();
    document.getElementById('year').innerHTML = mwaka;

    //Hours already spent on the day in question
    const masaa = today.getHours();
    document.getElementById('hours').innerHTML = masaa;



    //Creating the text field dynamically where the client will input his/her information
    const textField = document.createElement('input');
    textField.classList.add('text');
    textField.type = 'text';
    textField.placeholder = 'Input your task here'
    document.body.append(textField);

   // Creating an input button dynamically
    const button = document.createElement('input');
    button.classList.add('btn');
    button.value = 'Submit';
    button.type = 'button';
    document.body.append(button);

   //When the input button is clicked the following code runs
    button.addEventListener('click', function(){
        
        //Grab the value that the client has out on the text field
        const task = textField.value;
        

        //Create an unordered list element
        const ul = document.createElement('ul');
        document.body.append(ul)
        
        //Creating the list items
        let li = document.createElement('li');
        li.classList.add('tasks');

        //The list items contents
        li.innerHTML = `<h1><li>${task}</li></h1>`.toLocaleUpperCase();

        //Appending the list items to the unordered element
        ul.appendChild(li);

        localStorage.setItem('task1', `${task}`);

        textField.value = '';
        
         
        
        
        
    })


  
    



})
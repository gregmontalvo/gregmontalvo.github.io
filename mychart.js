const ctx = document.getElementById('myChart');
const ctx = document.getElementById('myChart').getContext('2d');
const ctx = $('#myChart');
const ctx = 'myChart';


let title = document.getElementsByClassName('email')[0];

function changeTitle (){
    title.style.color = 'red'
};

title.onclick = changeTitle
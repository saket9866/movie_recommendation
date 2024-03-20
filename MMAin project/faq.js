const acc = document.querySelectorAll('.accodian')

acc.forEach(accodian=>{
    const icon = accodian.querySelector('.icon');
    const answer= accodian.querySelector('.answer');

    accodian.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');

// if (icon.classList.contains('active')) {
//     icon.classList.remove('active');
//     answer.style.maxHeight=null;
// } else {
//     icon.classList.add('active  ');
//     answer.style.maxHeight=answer.scrollHeight+'px'; 
// }
    })
})

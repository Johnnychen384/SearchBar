const searchQuery = document.getElementById('search')


searchQuery.addEventListener('keyup', function(event){
const searchCurrent = event.target.value.toLowerCase();
let names = document.getElementsByClassName('name');
console.log(names)
    for (let i = 0; i < names.length; i++){
        const textOfName = names[i].textContent.toLowerCase();

        if (textOfName.includes(searchCurrent)){
            names[i].style.display = "block"
        } else {
            names[i].style.display = 'none'
        }


        
    }
})

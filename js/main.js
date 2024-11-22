document.addEventListener('DOMContentLoaded',function(){
    let hiddenMenu= document.querySelector('.hidden-menu')
    let navigate= document.querySelector('.navigate')
    let btnicon =document.querySelector('.navbar-toggler')
    let isHidden=true
    btnicon.addEventListener('click',()=>{
        isHidden=!isHidden
        if(isHidden){
            hiddenMenu.style.width='0px'
            hiddenMenu.style.visibility='hidden'
            navigate.style.left='0px'
            
        }
        else{
            hiddenMenu.style.width='250px'
            hiddenMenu.style.visibility='visible'
            navigate.style.left='250px'
            
        }
        
    })

  

})

var row= document.getElementById('row')
async function api(){
    const response= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const data =await response.json()
    console.log(data)
    show(data.meals)
}
api()
function show(meal){
    for (let i=0 ;i<meal.length ;i++){
        row.innerHTML+=`
        <div class="meal position-relative overflow-hidden rounded-4 cursor-pointer col-12 col-md-4 col-lg-3">
            <img src="${meal[i].strMealThumb}" class="w-100" alt="">
            <div class="inner position-absolute d-flex  align-items-center p-3">
                <h3>${meal[i].strMeal}</h3>
            </div>
        </div>
        `
    }
}

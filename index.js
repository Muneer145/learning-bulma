//mobile menu
const burgerIcon=document.querySelector('#burger');
const navbarMenu=document.querySelector('#nav-links');

burgerIcon.addEventListener('click',()=>{
    navbarMenu.classList.toggle('is-active')
})

//tabs

//selects all elements that have the tabs class anf li
const tabs=document.querySelectorAll('.tabs li');
console.log(tabs)
//selects all divs that under the tab-content id 
const tabContentBoxes=document.querySelectorAll('#tab-content > div');

tabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        tabs.forEach(item=>item.classList.remove('is-active'))
        tab.classList.add('is-active');
//dataset 
        const target=tab.dataset.target;
        console.log(target);
        tabContentBoxes.forEach(box=>{
            if(box.getAttribute('id')===target)  {
                   box.classList.remove('is-hidden');
            }else{
                box.classList.add('is-hidden');
            }
        })
    }) 
})
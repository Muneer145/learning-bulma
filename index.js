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

//Modal
const modal=document.querySelector(".modal");
const modalBg=document.querySelector(".modal-background");
const signupBtn=document.querySelector("#signup");

signupBtn.addEventListener("click",()=>{
    modal.classList.add("is-active");
})

//because we cant close the modal once its already open, we have to attach an event listener to the modal background that will remove the modal
modalBg.addEventListener("click", ()=>{
    modal.classList.remove("is-active")
})

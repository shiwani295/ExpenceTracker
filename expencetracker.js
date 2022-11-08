const MyForm=document.querySelector('#my-form')
const expAmountInput=document.querySelector('#expAmount');
const DescriptionInput=document.querySelector('#Description');
const CategoryInput=document.querySelector('#Category');
const buttonSubmit = document.getElementById('btn-id')


buttonSubmit.addEventListener('click',onSubmit)


document.addEventListener('DOMContentLoaded', function(){
    const locaData = Object.keys(localStorage)

    locaData.forEach((data)=> {
        const val = localStorage.getItem(data)

        const myObjLocal = JSON.parse(val)

        submitTheObj(myObjLocal)
    })
})

function onSubmit(e){
    e.preventDefault()
    const obj={
        amount: expAmountInput.value,
        des: DescriptionInput.value,
        cate: CategoryInput.value
    }
    //call the function 
    submitTheObj(obj);
    
}
//define the function 
function submitTheObj(obj){
    const convertstr= JSON.stringify(obj);

    localStorage.setItem(obj.des,convertstr)
    
    //we create div li 
    const PerantDiv=document.getElementById("div-parent-items");

    const After_parent_ul=document.createElement("item-ul");
    const eleli = document.createElement('li')
    const amount_p=document.createElement('p')
    const des_p=document.createElement('p')
    const cate_p=document.createElement('p')

    //class
    After_parent_ul.classList.add("list-group")//ul
    After_parent_ul.style.marginTop='20px'//ul css
    eleli.classList.add('list-group-item')//li
    amount_p.classList.add('exp-p')
    amount_p.style.fontWeight='700'
    des_p.classList.add('des-p')
    des_p.style.fontWeight='700'
    cate_p.classList.add('cate-p')
    cate_p.style.fontWeight='700'
   


    //button
    const Editbtn= document.createElement('button')
    const Deletebtn= document.createElement('button')

    //button class

    Editbtn.classList.add('btn-dark')
    Editbtn.classList.add('btn')
    Deletebtn.classList.add('btn-dark')
    Deletebtn.style.marginLeft='15px'
    Deletebtn.classList.add('btn')

    Editbtn.innerText='Edit'
    Deletebtn.innerText='Delete'

    //data insert into p tag 

    amount_p.innerHTML= `${obj.amount}`
    des_p.innerHTML=`${obj.des}`
    cate_p.innerHTML=`${obj.cate}`

    //insert all he data into div 
    PerantDiv.appendChild(After_parent_ul)
    After_parent_ul.appendChild(eleli)
    eleli.appendChild(amount_p)
    eleli.appendChild(des_p)
    eleli.appendChild(cate_p)
    eleli.appendChild(Editbtn)
    eleli.appendChild(Deletebtn)

    //edit and delete function for delete items

    Deletebtn.addEventListener('click', deleteFun)
    Editbtn.addEventListener('click', editFun)

    function deleteFun(){
        const targetElementDes = Deletebtn.previousSibling.previousSibling.previousSibling
        const targetElemetInnerHtmlForRelodedData = targetElementDes.innerHTML
        localStorage.removeItem(targetElemetInnerHtmlForRelodedData)

        const parenttarget = Deletebtn.parentElement
        parenttarget.remove()
    }

    function editFun(){


        const expAmountInputagaininsidefun=document.getElementById('expAmount')
        const DescriptionInputagaininsidefun=document.getElementById('Description')
        const CategoryInputagaininsidefun=document.getElementById('Category')

        const targetElementcate=Editbtn.previousSibling
        const targetElementdes=Editbtn.previousSibling.previousSibling
        const targetElementamount=Editbtn.previousSibling.previousSibling.previousSibling

        const getCategory=targetElementcate.innerHTML
        const getDes=targetElementdes.innerHTML
        const getAmount=targetElementamount.innerHTML

        expAmountInputagaininsidefun.value = getAmount
        DescriptionInputagaininsidefun.value = getDes
        CategoryInputagaininsidefun.value =getCategory

        localStorage.removeItem(getDes)

        const targetButtonParentForRelodedData=Editbtn.parentElement
        targetButtonParentForRelodedData.remove()

    }

}
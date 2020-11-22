const form= document.getElementById('addForm');
const itemList= document.getElementById('items');
const filter= document.getElementById('filter');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
itemList.addEventListener('click', liFocus);
itemList.addEventListener('mouseover', arrow);
filter.addEventListener('keydown', arrow);



function addItem(e){
    e.preventDefault();
    let newItem=document.getElementById('item').value;
    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    let deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    console.log(li);

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
   }
}

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items= itemList.getElementsByTagName('li');

   Array.from(items).forEach(function(item){
       var itemName=item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
           item.style.display='block';
           itemName.focus;
        }
       else{
       item.style.display='none';}
   })
   
}

function liFocus(e){
    let li=e.target;
    filter.value=li.firstChild.textContent;
    let filterName=filter.value.toLowerCase();
    var items= itemList.getElementsByTagName('li');
    
   Array.from(items).forEach(function(item){
       const itemName=item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(filterName) != -1){
        item.style.display='block';
}  
     else{
        item.style.display='none';} 
     });
}
function arrow(e){
    let items= itemList.getElementsByTagName('li');
    let i=0;
    let k=e.key;
    switch(k){
     case "ArrowUp":    
        items[i].style.backgroundColor='#f4f4f4';
         i++;
        break;
     case "ArrowDown":
        items[i].style.backgroundColor='#f4f4f4';
        i++;
        break;
    }
    i++;
   console.log(i);
 }
    


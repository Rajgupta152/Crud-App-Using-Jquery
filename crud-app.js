

$(function(){
// Get input value from html form
let name = $('#name');
let email = $('#email');
let pass = $('#pass');
let addId = $('#submit-btn').val();
let tbody = $('#tbody');
let data = [];
let a = 0;
let b;
$('#submit-btn').on('click',function(e){
    e.preventDefault();
    //Add data in table
    if(addId == ''){
        $(() => {
            if(name.val().length < 3){
                alert('Username must be atleast 3 charcter');
                return false;
            }
            if(!email.val().match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
                alert('Invalid Email. Please enter valid email');
                return false;
            }
            if(pass.val() == ''){
                alert('Please enter password');
            }
                //Creating tr element 
                
                data.push({
                    name: name.val(),
                    email: email.val(),
                    pass: pass.val()
                })
                console.log(data);
                
                addData();
                
      
    
            form.reset();
        })
    } else{
        // console.log(addId.val());
        addId = Number(addId);
        data[addId].name = name.val();
        data[addId].email = email.val();
        data[addId].pass = pass.val();
        
        tbody.children().remove();
        a = b;
        a = 0;
        addData();
        $('#submit-btn').text('Add');
        addId = '';
        form.reset()
           
    }

})

function addData(){
    console.log(a);
    for(let i=a; i<data.length; i++){
        let row = $('<tr></tr>');
        tbody.append(row);
        

        //Creating td element
        let cell1 = $('<td></td>');
        let cell2 = $('<td></td>');
        let cell3 = $('<td></td>');
        let cell4 = $('<td></td>');

        let editBtn = $('<button></button>');     
        editBtn.text('Edit');
        editBtn.attr('class','btn btn-warning table-btn');
        let deleteBtn = $('<button></button>'); 
        deleteBtn.text('Delete');
        deleteBtn.attr('class','btn btn-danger table-btn');
        deleteBtn.css('display','inline-block');
        deleteBtn.css('margin-left','5px');

        cell4.append(editBtn);
        cell4.append(deleteBtn);    

        row.append(cell1);
        row.append(cell2);
        row.append(cell3);
        row.append(cell4);

    

        cell1.text(data[i].name);
        cell2.text(data[i].email);
        cell3.text(data[i].pass);

        $(deleteBtn).click(() => {
            deleteData(deleteBtn,i);
        });

        
        $(editBtn).click(() => {
            editData(cell1,cell2,cell3,i);
        }); a++;
        } 
        
}

function deleteData(deleteBtn,i){
    let msg = 'Are you sure, you want delete it';
    if(confirm(msg)){
        $(deleteBtn).parent().parent().remove();
        data.splice(i,1);
        console.log(i);
        a--;
        console.log(data);
    }
}

function editData(cell1,cell2,cell3,i){
    name.val(data[i].name);
    email.val(data[i].email);
    pass.val(data[i].pass);
    addId = i;
    if(i == 0){
        addId = '0';
    }
    $('#submit-btn').text('Update');
}
})
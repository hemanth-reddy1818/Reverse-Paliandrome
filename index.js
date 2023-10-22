
var button=document.querySelector(".reverse_button");
button.addEventListener("click", function(){
   
    var input_value=document.querySelector("input").value;
    input_value=String(input_value);
    if(input_value.trim()==""){
        alert("Input cannot be empty");
    }
    else{
        let output=reverse(input_value);
        document.querySelector("h1").innerHTML="Reverse of "+input_value+" is "+output;
        adding_hide();
        Asking_user(); 
    }    
})


// event listener for paliandrome


var button1=document.querySelector(".Paliandrome");
button1.addEventListener("click", function()
{
    var input_value=document.querySelector("input").value;
    input_value=String(input_value);
    if(input_value == "" ){
        alert("Input cannot  be empty")
    }
    else
    {
        if(Number(input_value)<0){
            input_value*=-1;
            is_a_paliandrome_neg_num(String(input_value));
            adding_hide();
            Asking_user();
    
    
        }
        else{
            is_a_paliandrome(input_value);
            adding_hide();
            Asking_user();
        }
    }
 

    
})


function reverse(input_value){
           
    var array=[];
    for(var i=0;i<input_value.length;i++){
        
        array[i]=input_value[i];

    }
    let output="";
    
    for( var i=input_value.length-1;i>-1 ;i--){
        output+=array[i];
        
    }
    return output;
}
function is_a_paliandrome(num){
    
        let output=reverse(num);
        if(output==num){
            document.querySelector("h1").innerHTML=num+ "  is a paliandrome.";
            return true;
        }
        else{
            document.querySelector("h1").innerHTML=num+ "  is not a paliandrome.";
            return false;
        }

    


}

function is_a_paliandrome_neg_num(num){
    let output=reverse(num);
    console.log(num);
    console.log(output);
    if (is_a_paliandrome(num)){
        document.querySelector("h1").innerHTML="-"+num+ "  is a paliandrome.";


    }
    else{
        document.querySelector("h1").innerHTML="-"+num+ "  is not a paliandrome.";

    }
    // if(output==num){
    //    
    // }
    // else{
    //     
    // }

}
function Asking_user(){
       
    setTimeout(() => {
        var try_again=prompt("Do you want to another numvber:(Y/N)");
        if(try_again.toLowerCase()=="Y".toLowerCase()){
            location.reload();
    
    
        }
    
        
    }, 3000);


}
function adding_hide(){
    
    document.querySelector(".form-container").classList.add("hidden");
    console.log(document.querySelector(".form-container").classList);
}



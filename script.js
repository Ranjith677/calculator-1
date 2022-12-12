        let a=document.getElementById("calculator1");
        function display(num){
            a.value +=num;
        }
        function calculate(){
            try {
                a.value=eval(a.value)
            }
            catch(err){
                alert("invalid")
            }
            
                
            }
            function Clear(){
                a.value = "";
            }
            function del(){
                a.value = a.value.slice(0,-1);
            }
  
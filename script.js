//console.log("Script is working!")

function validaCPF(cpf) {
 
    //console.log(cpf);
    if(cpf.length != 11) {
        return false;  
    }
    
 
    else {
        var numbers = cpf.substring(0,9);
        var digit = cpf.substring(9);

        var sum = 0;

        for (var i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
        }

        var result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

        //first digit validation
        if (result != digit.charAt(0)) {
            return false;
        }

        sum = 0;
        numbers = cpf.substring(0,10);

        for (var i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
        }

        result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

        //second digit validation
        if (result != digit.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validate() {
    var cpf = document.getElementById('cpf_informado').value;

    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    
    var resultValidation = validaCPF(cpf);
    //console.log(resultValidation);

    if (resultValidation) {
        document.getElementById('success').style.display = "block";
    }
    else {
        document.getElementById('error').style.display = "block";
    }
}
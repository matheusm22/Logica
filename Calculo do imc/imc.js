/**
 * Cálculo do IMC
 * @author Professor José de Assis
 */

 function calcularImc(){
     let peso, altura, imc
     peso = parseFloat(frmImc.txtPeso.value.replace(",","."))
     altura = parseFloat(frmImc.txtAltura.value.replace(",","."))
     imc = peso / (altura * altura)
     frmImc.txtImc.value = imc.toFixed(2)
      if (imc < 17){
          document.getElementById("Imc").src = "Imc.png"
        status = 1
    }
    
 }
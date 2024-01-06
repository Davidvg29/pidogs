const validation = (inputs)=>{
     const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/;

     let error= {}

    if(inputs.name===""|| inputs.name.length<3){
         error = {...error, name:"nombre debe tener mas de 3 caracteres"}
     
     }

      if(inputs.image==="" || !regexUrl.test(inputs.image)){
          error = {...error, image:"debes ingresar una url valida"}
          
     }
     if(inputs.image.length>250){
          error = {...error, image:"la url no puede ser mayor a 250 caracteres"}
          
     }
     
     

     //ALTURA
      if(inputs.height.length<3){
          error = {...error, height:"altura debe tener minimo 3 caracteres"}
     
     } if(!inputs.height.includes("-")){
          error = {...error, height:"altura debe estar separado por -"}
     
     }
      if(inputs.height.includes("-")){
          let array = inputs.height.split("-")
          let array0 = Number(array[0])
          let array1 = Number(array[1])

          if(!isNaN(array0) && !isNaN(array1)){
               // error = {...error, height:""}
               if(array0 === 0 || array1 === 0){
                    error = {...error, height:"ninguna de las alturas puede ser 0"}
                   
               }
          }else{error = {...error, height:"las alturas deben ser numeros"}}
          
     }

     //PESO
      if(inputs.weigth.length<3){
          error = {...error, weigth:"peso debe tener minimo 3 caracteres"}
     }
     if(!inputs.weigth.includes("-")){
          error = {...error, weigth:"peso debe estar separado por -"}
     
     }
      if(inputs.weigth.includes("-")){
          let array = inputs.weigth.split("-")
          let array0 = Number(array[0])
          let array1 = Number(array[1])

          if(!isNaN(array0) && !isNaN(array1)){
               // error = {...error, weigth:""}
               if(array0 === 0 || array1 === 0){
                    error = {...error, weigth:"ningun peso puede ser 0"}
                   
               }
          }else{error = {...error, weigth:"los pesos deben ser numeros"}}
          
     }

     //AÑOS DE VIDA
     if(inputs.life_span.length<3){
          error = {...error, life_span:"años de vida debe tener minimo 3 caracteres"}
     }
     if(!inputs.life_span.includes("-")){
          error = {...error, life_span:"años de vida debe estar separado por -"}
     
     }
      if(inputs.life_span.includes("-")){
          let array = inputs.life_span.split("-")
          let array0 = Number(array[0])
          let array1 = Number(array[1])

          if(!isNaN(array0) && !isNaN(array1)){
               // error = {...error, life_span:""}
               if(array0 === 0 || array1 === 0){
                    error = {...error, life_span:"ningun año de vida puede ser 0"}
                   
               }
          }else{error = {...error, life_span:"años de vida deben ser numeros"}}
          
     }
     
      
    

return error

}
export default validation


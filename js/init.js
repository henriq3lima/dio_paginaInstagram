window.onload = function() {
    ;function alterarImagem(){//Recebemos dois valores por parâmetro.
        ;var time = 1;
        ;var ele_antigo =   document.getElementById("imagem_alterar_img")
        ;fade_out(ele_antigo,time)
        var elemento_pai = document.body
        var elemento = document.createElement("img")
        elemento_pai.appendChild(elemento)
        ;fade_in(ele_antigo,time)
    }

    ;var delay=2000; //1 seconds
    ;setTimeout(function(){
            alterarImagem();

    },delay);

    function resolver(delay,increment) {
        return new Promise(resolve => {
            setTimeout(() => {
              resolve(increment);
            }, delay/100);
          });
      }




    ;function fade_out(ele,time){
        mudar(ele,100,0,time)
    }
    ;function fade_in(ele,time){
        mudar(ele,0,100,time)
    }

    function mudar(ele,init,end,time){
        var i = init;
        var increment = (end-init)/100 
        async function f(ele,init,end,time,increment){
            while (i!=end){
                var espera = resolver(time,increment)
                i = i+ await espera
                ele.style.opacity = i/100
            }
        }
        f(ele,init,end,time,increment)
        
        
    }

}
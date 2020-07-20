window.addEventListener('load', start);
function start(){
  
  preventFormSubmit();
  inputFocus();

  
  var global_valor_inicial = document.getElementById('valor_inicial');
  var global_valor_mensal = document.getElementById('valor_mensal');
  var global_taxa_juros = document.getElementById('taxa_juros');
  var global_periodo = document.getElementById('periodo');

  global_valor_inicial.setAttribute('required', 'true');
  global_valor_mensal.setAttribute('required', 'true');
  global_taxa_juros.setAttribute('required', 'true');
  global_periodo.setAttribute('required', 'true');

  document.querySelector('form').addEventListener('submit', calcular);

//----------Funções----------//

    //faz o cáculo dos juros compostos
    function calcular(){
      var vi = global_valor_inicial.value;
      var vm = global_valor_mensal.value;
      var tj = global_taxa_juros.value;
      var p = global_periodo.value;
      var result = 0;

      tj=tj/100 // faz o calculo da porcentagem

      result = vi * Math.pow((1 + tj), p) + vm * (Math.pow((1 + tj), p) - 1)/tj;
      
      document.getElementById('resultado').innerHTML = 'O total acumulado no futuro será de aproximadamente: R$' + result.toFixed('2');
    }

    function preventFormSubmit(){
        function handleFormSubmit(e){
            e.preventDefault();
        }
      var form = document.querySelector('form');
      form.addEventListener('submit', handleFormSubmit);
  }

  function inputFocus(){
    document.getElementById('valor_inicial').focus();
  }
}
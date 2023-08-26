<h1>Exercícios de debug</h1>
</br>
<p>Uma das habilidades mais utilizadas no dia a dia de um desenvolvedor é a de resolver falhas(bugs). Desta forma, é mais do que necessário treinarmos desde o início da formação profissional a leitura de erros e a busca por soluções. Porque o que faz um bom desenvolvedor não é apenas o bom código escrito, mas a capacidade de pesquisa e autodidatismo necessária para transpor obstáculos em qualquer projeto.  E esta pequena lista de exercícios pretende dar início a construção dessas habilidades, por meio da resolução de cinco bugs simples; hora expressos em erros no console, hora expressos em funções que apresentam comportamentos diferentes do esperado. </p>
</br>
<h3>Como fazer os exercícios.</h3>
<ol>
  <li>Descomente a linha que instância a classe do exercícios no arquivo index.js
  <img src="./prints/howtodotheex.png">
</li>
  <li>Clique na pasta “exercices”
  <img src="./prints/howtodotheex2.png">
</li>
  <li>Abra o index.html no navegador para poder analisar os erros. 
</li>
</ol>
<h3>Exemplos</h3>
</br>
<h5>Exemplo1</h5>
<p>Esta função, quando escrita com a sintaxe correta, retorna a mensagem ‘Olá’ no console. Porém, em vez disso, temos um erro. Nesta mensagem podemos ler que o bug está na linha 7 do arquivo exemplo01.js, e que ‘console.lg is not a function’. Portanto, podemos inferir que: 
  <img src="./prints/exemplo01error.png">
</p>
<ol type="I">
  <li>console.lg não é uma função por que não foi declarada. 
</li>
  <li>console.lg não é uma função por que não instanciada corretamente 
</li>
  <li>console.lg não é uma função por que houve um erro de digitação no uso de um método nativo.  
</li>
</ol>
<p>Após uma curta análise é possível concluir que a alternativa 3 descreve o que ocorreu e assim pesquisar a sintaxe correta para a solução da falha.</p>
<code>console.log()</code>
  <img src="./prints/exemplo01ola.png">
</br>
<h5>Exemplo2</h5>
<p>Aqui temos um erro de sintaxe muito parecido com o do exemplo anterior. Há no console a mensagem ‘window,prompty is not a function’ indicando que o comando no arquivo exemplo02.js, na linha 7 não está funcionando. E a solução passa pelas mesmas etapas que vimos anteriormente, sendo a solução a pesquisa da sintaxe correta do window.prompt.</p>
  <img src="./prints/exemplo02error.png">
  <img src="./prints/exemplo02func.png">
  <img src="./prints/exemplo02func2.png">
</br>
##
<h3>Descrição dos exercícios </h3>
<h4>1) pegaDados()</h4>
<p>A função pegaDados, quando escrita corretamente, captura os dados digitados pelo usuário no input e retorna-os no console. 
</p>
<h5>Comportamento correto</h5>
<img src="./prints/ex01func.png">
<img src="./prints/ex01func2.png">
<h5>Error</h5>
<img src="./prints/ex01error.png">
</br>
<h4>2) salvaDados()</h4>
<p>A função salvaDados, quando escrita corretamente, captura os dados digitados pelo usuário no input e os salva no localStorage. 
Comportamento correto</p>
<h5>Comportamento correto</h5>
<img src="./prints/ex02func.png">
<img src="./prints/ex02func02.png">
<h5>Error</h5>
<img src="./prints/ex02error.png">
<img src="./prints/ex02error2.png">
</br>
<h4>3) mostraDados()</h4>
<p>A função mostraDados, quando escrita corretamente, captura os dados digitados pelo usuário no input e retorna-os em um <h1> abaixo do input.</p>
<h5>Comportamento correto</h5>
<img src="./prints/ex03func.png">
<h5>Error</h5>
<img src="./prints/ex03error.png">
</br>
<h4>4) calc()</h4>
<p>A função calc, quando escrita corretamente, captura expressões matemáticas digitadas no input e retorna o resultado no console.</p>
<h5>Comportamento correto</h5>
<img src="./prints/ex04func.png">
<img src="./prints/ex04func02.png">
<h5>Error</h5>
<img src="./prints/ex04error.png">
</br>
<h4>5) soma()</h4>
<p>A função soma, quando escrita corretamente, captura dois números digitados pelo usuário no prompt e retorna o resultado em um alert.</h5>
<img src="./prints/ex05func.png">
<img src="./prints/ex05func2.png">
<img src="./prints/ex05func4.png">
<h5>Error</h5>
<img src="./prints/ex05error.png">
<img src="./prints/ex05error2.png">
<img src="./prints/ex05error3.png">
</br>
<p></p>
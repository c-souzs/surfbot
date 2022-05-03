<p><h1 align="center">🌊 Surfbot 🌊 </h1></p>
<p align="center">Site para divulgação de uma das melhores escolas (fictícia) de surf.</p>

<p align="center">
 <a href="#sobre">Sobre</a> •
  <a href="#status">Status</a> •
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#instalacao">Instalação</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#autor">Autor</a> • 
 <a href="#licenca">Licença</a>
</p>

<div id="sobre">
  <h1>📎 Sobre. </h1>
  <p> O projeto surfbot foi desenvolvido com o objetivo de aplicar o conhecimento em html e css e relembrar conceitos de javascript visto no curso técnico. Além disso o  sistema busca se aproximar de um projeto real, prático que poderia ser facilmente aplicado em um cenário real.</p> 
  <p> O sistema apresenta duas páginas, uma para divulgação da escola e outra voltada para a compra dos planos ofertados. Ambas as páginas sofreram alterações do projeto principal para se adpatar as funcionalidades extras, que você pode encontrar em: <a href="#funcionalidades">funcionalidades</a>.
  </p>
  <p><em>Pse: Vale ressaltar que o layout e a ideia do projeto foram retirados do curso da <a href="https://www.origamid.com/">origamid</a>. Entretanto o projeto é feito no modulo de UI/UX Design da plataforma. Logo existe apenas o seu layout pronto, todo o código e detalhes foram feito à parte por mim.</em></p>
</div>
<div id="status">
  <h1>✅ Status.</h1>
  <p>Atualmente o projeto se encontra <b>FINALIZADO</b> e pode ser vizualizado na imagem de demonstração abaixo ou acessado atráves do link: <a   href="https://souzzs.github.io/surfbot/">Surfbot online 🏄</a>.</p>
  <p align="center"><img src="./images/surfbot-demo-prinicipal.gif"></p>
</div>

<div id="funcionalidades">
  <h1>🔧 Funcionalidades.</h1>
  <p>Todas as funcionalidades envolvendo javascript foram adicionadas à parte do projeto principal para aplicar os conhecimentos na manipulação do DOM, sendo elas
  listadas e detalhadas abaixo.</p>
  <ul>
    <li>
      <h3>Responsividade.</h3>
      <p>Apesar da responsividade não está diretamente ligada com javascript, o layout do projeto no figma contém apenas as telas para a versão desktop do sistema, logo toda a questão de responsividade foi feita por mim, sendo um ótimo momento para recordar conceitos de css. Abaixo podemos ver um exemplo do sistema acessado pelo mobile.</p>
      <p align="center"><img src="./images/surfbot-demo-mobile.gif"></p>
    </li>
    <li>
      <h3>Acessibilidade para mobile.</h3>
      <p>Com a versão mobile do site veio a necessidade de tratar os eventos de clique em elementos da tela, dado que a uma diferença entre o evento de clique no desktop e no mobile. Veja em seguida o resultado.</p>
      <p align="center"><img src="./images/surfbot-demo-menus.gif"></p>
    </li>
    <li>
      <h3>Validação de inputs.</h3>
      <p>Apesar do formulário do sistema não ter uma reação a validação de inputs foi feita, visto que na maioria dos sistemas desenvolvidos sempre tem a necessidade de haver formulários. Logo foi uma ótima chance para aplicar alguns conhecimentos em regex. Olhe a validação em ação a seguir.</p>
      <p align="center"><img src="./images/surfbot-demo-validacao.gif"></p>
    </li>
    <li>
      <h3>Consumo de API.</h3>
      <p>Basicamente tudo na web hoje tem alguma parte assincrona, como isso entender como essa parte funciona no javascript é de suma importancia. Nesse caso optei por usar a <a href="https://viacep.com.br/">VIA CEP API</a> para puxar uma uf baseado no cep digitado e com esse dado em mãos consultar a <a href="https://servicodados.ibge.gov.br/api/docs/localidades">LOCALIDADES API IBGE</a> e listar as cidades em um select para o usuário selecionar. Confira.</p>
      <p align="center"><img src="./images/surfbot-demo-localizacao.gif"></p>
    </li>
  </ul>
</div>

<div id="instalacao">
   <h1>ℹ️ Instalação.</h1>
  <p>Como o projeto foi feito com tecnologias básicas sua instalação é simples.</p>
  <ul>
    <li>
      <p>Primeiro abra seu editor de texto e no terminal digite o seguinte comando:</p>
      <p><code>$ git clone https://github.com/souzzs/surfbot.git</code></p>
    </li>
    <li>
      <p>Por ultimo basta rodar o projeto em um sevidor interno, usando por exemplo o <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live server </a>.
    </li>
  </ul>
</div>

<div id="tecnologias">
  <h1>🛠 Tecnologias.</h1>
  <p>
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5"></a>
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="CSS3"></a>
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JAVASCRIPT"></a>
  </p>
</div>

<div id="autor">
  <h1>✏️ Autor.</h1>
  <p>Desenvolvimento por <a href="https://github.com/souzzs">Caio Souza</a>.</p>
  <p>Gostou do projeto? Quer tirar sua ideia do papel? Entre em contato pelas redes sociais abaixo</p>
  <p>
    <a href="https://instagram.com/seu-usuario/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="Instagram Badge"></a>
    <a href="https://discord.gg/seu-server"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&amp;logo=discord&amp;logoColor=white" alt="Discord Badge"></a>
    <a href="https://www.linkedin.com/in/seu-usuario/"><img src="https://img.shields.io/badge/  LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="Linkedin"></a>
  </p>
  <p><em>Caso seja algum dev entre em contato também para trocar uma ideia.</em></p>
</div>

<div id='licenca'>
  <h1>🔖 Licença.</h1>
  <p><a href="/LICENSE"><img src="https://img.shields.io/badge/MIT License-E58080?style=for-the-badge&amp;logo=bookstack&amp;logoColor=white" alt="LICENSA"></a></p>
</div>

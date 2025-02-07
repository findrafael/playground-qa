# Playground de QA


Seja bem-vindo ao meu playground! Aqui você encontra alguns exemplos de testes, automações e experimentos relacionados à Qualidade de Software. O objetivo é compartilhar conhecimento, explorar novas abordagens e ferramentas, além de testar diferentes estratégias de QA na prática.

## 📌 O que você encontrará aqui?
- Cypress - Automação de Testes Web
- Postman - Testes e Automação de API
- JMeter - Testes de Carga e Performance


## Cypress - Automação de Testes Web

A automação de testes desempenha um papel fundamental na garantia da qualidade de software, permitindo a execução rápida e eficiente de testes repetitivos, aumentando a cobertura e reduzindo erros humanos. Com o uso de ferramentas e frameworks especializados, é possível validar funcionalidades, desempenho e integrações de forma confiável, garantindo entregas mais ágeis e estáveis.


#### Como executar a automação:
**1-  Com o repositório clonado, acesse a pasta da automação do front:**
 ```sh
 cd automacao-front
 ```
**2-  Antes de rodar a automação, certifique-se de instalar todas as dependências do projeto. Para isso, utilize o comando:**
 ```sh
 npm install
 ```
 Esse comando garantirá que todas as bibliotecas e pacotes necessários estejam disponíveis para a execução dos testes.
 
**3- Após a instalação das dependências, há duas formas de executar os testes com o Cypress:**

Modo headless (linha de comando) – Para rodar os testes diretamente no terminal, use:
```
npx cypress run
```
Isso executará os testes sem abrir a interface gráfica, sendo ideal para integrações contínuas e execução automatizada.

Modo interativo (interface gráfica) – Caso queira visualizar os testes rodando no navegador, utilize:
```
npx cypress open
```
Esse comando abrirá a interface do Cypress, onde você pode escolher e executar os testes manualmente.
 
#### Relatórios Automatizados:

Este projeto utiliza o Mochawesome como repórter para gerar relatórios detalhados sobre os testes executados. O Mochawesome gera arquivos HTML e JSON contendo informações sobre os testes, facilitando a análise dos resultados.

**📂 Onde encontrar os relatórios?**
Após a execução dos testes, os relatórios estarão disponíveis na pasta:
```
automacao-front/reports
```
A automação também grava um vídeo dos testes sendo executados, o vídeo estará disponível na pasta:
```
automacao-front/reports/videos/
```
**📊 Como visualizar os relatórios?**
1-  Após a execução dos testes, acesse a pasta reports.
2-  Abra o arquivo HTML gerado (exemplo: mochawesome.html) diretamente no navegador.
3-  O relatório exibirá informações detalhadas como:
- Quantidade de testes executados, aprovados e falhos
- Erros detalhados com logs
- Duração de cada teste
- Vídeos dos testes

**📌 Integração com CI/CD**
Caso deseje rodar os testes em uma pipeline CI/CD (como GitHub Actions, Jenkins ou GitLab CI), esses relatórios do Mochawesome podem ser armazenados e compartilhados como artefatos, facilitando a análise posterior.

## Postman - Testes e Automação de API
 
Este projeto inclui testes automatizados de API utilizando o Postman, uma ferramenta poderosa para desenvolvimento e validação de APIs. Com o Postman, é possível enviar requisições HTTP, validar respostas e automatizar testes para garantir o funcionamento correto das APIs.

**⚒️ Ferramentas necessárias:**
- Docker – Para rodar a API mockada com o Serverest
- Postman – Para executar e automatizar os testes de API
- Mockoon – Para simular respostas da API com mocks personalizados

**1- Instalando e executando a API mockada (Serverest):**
A API utilizada nos testes é a Serverest, que fornece endpoints mockados para simulação de cenários reais.

Instale o Docker em seu computador, caso ainda não tenha.
Execute o seguinte comando para baixar e rodar o container da API:
```
docker run -p 3000:3000 paulogoncalvesbh/serverest:latest
```
Isso iniciará a API no endereço http://localhost:3000

**2- Configurando o Mockoon:**

O Mockoon é utilizado para criar mocks personalizados da API. Para configurá-lo:
- Instale o Mockoon no seu computador.
- Abra o Mockoon e importe a configuração do mock a partir do arquivo api.json.
- Inicie a execução do Mockoon clicando no botão "Start".

Isso iniciará a API no endereço http://localhost:3001
Agora, os endpoints mockados estarão disponíveis para os testes.

**3- Importando os testes no Postman:**
Com o Postman instalado, siga os passos abaixo para importar a coleção de testes:

- Abra o Postman.
- Vá até File → Import.
- Selecione o arquivo Testes de API.postman_collection.json.

**4- Executando os testes no Postman Runner:**
Na interface do Postman, localize e clique na aba Runner, situada na parte superior esquerda, ao lado da aba Collections.

No Postman Runner, encontre e selecione a coleção de testes importada, que agora estará disponível.

Clique em Run para iniciar a execução dos testes. O Postman irá executar as requisições definidas na coleção, uma a uma.

<img src="https://github.com/findrafael/playground-qa/blob/main/media/runner.png">

**5- Analisando os resultados:**

Após a execução dos testes, o Postman exibe um relatório detalhado, fornecendo informações cruciais para a análise dos testes realizados:

<img src="https://github.com/findrafael/playground-qa/blob/main/media/results.png">

O Postman exibe a quantidade de testes aprovados, detalha erros em caso de falhas (incluindo o motivo e o erro da API) e mostra o tempo de resposta de cada requisição, ajudando a avaliar o desempenho e a latência da API.

## JMeter - Testes de Carga e Performance

O JMeter é uma ferramenta utilizada para testar o desempenho e a carga de aplicações web, simulando múltiplos usuários para avaliar a escalabilidade e a estabilidade do sistema sob tráfego intenso. Ele ajuda a identificar gargalos e otimizar o desempenho em cenários de alta demanda.

**⚒️ Ferramentas necessárias:**
- Docker – Para rodar a API mockada com o Serverest
- JMeter – Para executar os testes de carga e performance

**1- Instalando e executando a API mockada (Serverest):**
A API utilizada nos testes é a Serverest, que fornece endpoints mockados para simulação de cenários reais.

Instale o Docker em seu computador, caso ainda não tenha.
Execute o seguinte comando para baixar e rodar o container da API:
```
docker run -p 3000:3000 paulogoncalvesbh/serverest:latest
```
Isso iniciará a API no endereço http://localhost:3000

**2- Importando os testes no JMeter:**
Com o JMeter instalado, siga os passos abaixo para importar o arquivo dos testes:

- Abra o JMeter.
- Vá até File → Open.
- Selecione o arquivo teste-carga.jmx

**3- Executando os testes no JMeter:**
Na interface do JMeter, localize o botão de Play para iniciar os testes.

Após clicar nele os testes deverão iniciar e o JMeter deverá disparar uma carga de 100 usuários para realizar as seguintes requisições:
- GET - Buscar todos os usuários
- POST - Criar um usuário
- DELETE - Excluir o usuário criado anteriormente

Quando o teste for executado no JMeter, existem duas formas principais de visualizar as informações sobre o desempenho da API e o impacto da carga:

**Listeners:**
São componentes do JMeter que capturam e exibem os resultados dos testes em tempo real. 

Summary Report: Exibe um resumo dos resultados do teste, incluindo o número de requisições realizadas, o tempo médio de resposta, a taxa de erro, entre outros dados essenciais para avaliar a performance.
<img src="[a](https://github.com/findrafael/playground-qa/blob/main/media/summary_report.png)">

Aggregate Report: Similar ao Summary Report, mas com uma visão mais detalhada. Ele apresenta métricas como o tempo mínimo, máximo e médio de resposta, além de informações sobre as requisições e falhas. Esse listener é útil para identificar padrões de desempenho.
<img src="https://github.com/findrafael/playground-qa/blob/main/media/aggregate_report.png">

View Results Tree: Fornece uma visão detalhada de cada requisição, incluindo a resposta completa da API, o status da requisição (sucesso ou falha), e o tempo de resposta. Ele é especialmente útil para depuração, permitindo analisar as respostas de forma individualizada e entender melhor onde podem estar ocorrendo problemas.

<img src="https://github.com/findrafael/playground-qa/blob/main/media/results_tree.png">

**Consulta ao Status da API (Serverest):**

Além dos listeners do JMeter, você também pode monitorar o status da API localmente acessando: http://localhost:3000/status

Isso permite verificar rapidamente se a API está funcionando corretamente durante o teste, fornecendo uma visão em tempo real do estado do servidor enquanto a carga é aplicada.

<img src="https://github.com/findrafael/playground-qa/blob/main/media/status_serverest.png">

Utilizando essas duas abordagens, você pode obter uma visão abrangente de como a carga impactou a performance da API, identificando tanto falhas quanto pontos fortes no seu comportamento sob estresse.

## Obrigado!!

Obrigado por explorar este projeto! Se você encontrou algo interessante ou útil, sinta-se à vontade para contribuir, sugerir melhorias ou entrar em contato.

**Sua colaboração e feedback são sempre bem-vindos.**

## Typescript design patterns in practice 

Note: The main files are inside `src` directory

## how to install 
```bash
npm install 
```


## How to run 
```bash
ts-node src/[PATTERN NAME].ts
ts-node src/mediator.ts
```


### Summary - Resumo (pt-br)

- Creational - criacional (pt-br)
    - Singleton é o solteirão, só permite ser criado uma vez e não cria mais objetos com o new utilizando essa classe.
    - Prototype é um clone 
    - Factory é para não ficar escrevendo novo objeto toda vez
    - Builder - vai se construíndo aos poucos, a cada método adiciona uma nova informação no objeto (classe)

- Structural - estrutural (pt-br) 
    - facade (fechado), serve para deixar mais intuitivo trabalhar com um objeto complexo, faz que você não precise conhecer todos os detalhes internos.
    - proxy - é como um substituto, uma alternativa quando você possui um objeto grande e não deseja duplicá-lo, a fim de evitar o uso excessivo de memória.

- Behavioral - comportamental (pt-br)
    - iterator - fornece uma maneira de acessar elementos de uma coleção sequencial de maneira consistente
    - observer - 


### When to refactor - Quando refatorar (pt-br)

- Rule of Three
    1. When you’re doing something for the first time, just get it done.
    2. When you’re doing something similar for the second time, cringe at having to repeat but do the same thing anyway.
    3. When you’re doing something for the third time, start refactoring.
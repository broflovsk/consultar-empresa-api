# 🏠 API EMPRESARIAL

## Introdução:

Está biblioteca é para buscar dados de empresas a partir do CNPJ, EMAIL, TELEFONE, NOME e CPF.

## Uso

### - Instalação

```bash
$ npm install consultar-empresa-api
```

### - Importar

```js
import { consultarCnpj, consultarTelefone, consultarPessoa, consultarEmail } from "consultar-empresa-api"
```

### - Exemplo de consultas

```js

consultarCnpj({ cnpj: "10573521000515" })
.then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
})

consultarTelefone({ telefone: "1125434155" })
.then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
})

consultarPessoa({ cpf: "***506758**", nome: "TULIO XAVIER DE OLIVEIRA" })
.then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
})

consultarEmail({ email: "NAORESPONDER@MERCADOLIVRE.COM" })
.then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
})
```
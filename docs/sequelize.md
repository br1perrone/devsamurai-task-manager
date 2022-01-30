# Sequelize

## Desenvolvimento

Inicializando o Sequelize
```bash
cd src
npx sequelize init
md database
move migrations/index.js database
move migrations database
move seeders database
```

## Atualizar código para ES6

Alterações do config de acesso ao banco de dados pelo sequelize
Alteração da classe de banco de dados do sequelize

## Criação de Model

```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password_hash:string
npx sequelize-cli model:generate --name Project --attributes name:string,description:string,status:enum,user_id:integer
npx sequelize-cli model:generate --name Task --attributes due_date:date,effort:integer,title:string,description:text,order:integer,status:enum,user_id:integer,project_id:integer
```

## Rodar as migrations

```bash
npx sequelize-cli db:migrate
```

## Atualizar uma Tabela (criando migration)

```bash
npx sequelize-cli migration:generate --name add-upload-to-task
```
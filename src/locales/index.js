// AdminJS locales https://github.com/SoftwareBrothers/adminjs
// https://gist.github.com/felipefontoura/95867d858235f55afc1bd91a7c8e2cb5

import labels from './labels'
import resources from './resources'
import messages from './messages'

const commonProps = {
    status: "Situação",
    createdAt: "Criação",
    updatedAt: "Atualização",
};

const translations = {
    actions: {
        new: "Criar novo",
        edit: "Editar",
        show: "Exibir",
        delete: "Apagar",
        bulkDelete: "Apagar todos",
        list: "Listagem",
    },
    buttons: {
        save: "Salvar",
        addNewItem: "Adicionar novo item",
        filter: "Filtrar",
        applyChanges: "Aplicar alterações",
        resetFilter: "Limpar",
        confirmRemovalMany: "Deseja remover {{count}} registro?",
        confirmRemovalMany_plural: "Deseja remover {{count}} registros?",
        logout: "Logout",
        login: "Login",
        seeTheDocumentation: "Veja: <1>documentação</1>",
        createFirstRecord: "Criar o primeiro registro",
        resetPassword: "Redefinir senha",
    },
    labels: {
        navigation: "Navegação",
        pages: "Páginas",
        selectedRecords: "Selecionados ({{selected}})",
        filters: "Filtros",
        adminVersion: "Admin: {{version}}",
        appVersion: "App: {{version}}",
        loginWelcome: "Bem vindo(a)",
        ...labels,
    },
    properties: {
        length: "Tamanho",
        from: "De",
        to: "Para",
    },
    ...resources,
    // resources: {
    //     users: {
    //         actions: {
    //             resetPassword: "Redefinir senha",
    //         },
    //         properties: {
    //             id: "ID",
    //             initials: "Iniciais",
    //             name: "Nome",
    //             email: "Email",
    //             password: "Senha",
    //             passwordHash: "Senha criptografada",
    //             role: "Perfil",
    //             ...commonProps,
    //         },
    //     },
    //     projects: {
    //         properties: {
    //             id: "ID",
    //             name: "Nome",
    //             description: "Descrição",
    //             userId: "Responsável",
    //             ...commonProps,
    //         },
    //     },
    //     tasks: {
    //         properties: {
    //             id: "ID",
    //             due_date: "Data de entrega",
    //             effort: "Esforço",
    //             title: "Título",
    //             description: "Descrição",
    //             order: "Prioridade",
    //             attachment: "Anexo",
    //             projectId: "Projeto",
    //             userId: "Responsável",
    //             ...commonProps,
    //         },
    //     },
    // },
    messages: {
        email: "Email",
        password: "Senha",
        login: "Entrar",
        ...messages
    },
};

export default {
    locale: {
        language: "pt-BR",
        translations,
    },
};
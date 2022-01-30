import AdminJS from 'adminjs';

import User from '../models/user';

export default {
    resource: User,
    options: {
        parent: {
            icon: "User",
        },
        actions: {
            resetPassword: {
                actionType: 'record',
                icon: 'Password',
                handler: async (request, response, context) => {
                    return {
                        record: context.record.toJSON(),
                    }
                }
            }
        },
        properties: {
            id: {
                position: 1,
            },
            initials: {
                position: 2,
                isVisible: { list: true, filter: false, show: true, edit: false, },
            },
            name: {
                position: 3,
                isRequired: true,
            },
            email: {
                position: 4,
                isRequired: true,
            },
            role: {
                position: 5,
                isRequired: true,
                availableValues: [
                    { value: 'admin', label: 'Administrador' },
                    { value: 'manager', label: 'Gerente' },
                    { value: 'developer', label: 'Desenvolvedor' },
                ],
            },
            status: {
                position: 6,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'archived', label: 'Arquivado' },
                ],
            },
            createdAt: {
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false, },
            },
            updatedAt: {
                position: 8,
                isVisible: { list: false, filter: true, show: true, edit: false, },
            },
            password: {
                position: 9,
                isVisible: false,
            },
            password_hash: {
                position: 10,
                isVisible: false,
            },
       },
    },
}
import AdminJS from 'adminjs';

import Project from '../models/project';

import {
    hasAdminPermission,
    hasManagerPermission,
    hasDeveloperPermission,
} from '../services/auth';

const ProjectsResource = {
    resource: Project,
    options: {
        parent: {
            icon: "Roadmap",
        },
        actions: {
            list: {
                isAccessible: ({currentAdmin})=> hasDeveloperPermission(currentAdmin),
            },
            show: {
                isAccessible: ({currentAdmin})=> hasDeveloperPermission(currentAdmin),
            },
            new: {
                isAccessible: ({currentAdmin})=> hasManagerPermission(currentAdmin),
            },
            edit: {
                isAccessible: ({currentAdmin})=> hasManagerPermission(currentAdmin),
            },
            delete: {
                isAccessible: ({currentAdmin})=> hasManagerPermission(currentAdmin),
            },
        },
        properties: {
            id: {
                position: 1,
            },
            name: {
                position: 2,
                isRequired: true,
            },
            description: {
                position: 3,
                type: 'textarea',
            },
            userId: {
                position: 4,
            },
            user_id: {
                position: 5,
                isVisible: false,
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
       },
    },
}

export {ProjectsResource}
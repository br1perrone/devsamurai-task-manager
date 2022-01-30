import AdminJS from 'adminjs';

import uploadFeature from '@adminjs/upload';

import Task from '../models/task';

import {
    hasAdminPermission,
    hasManagerPermission,
    hasDeveloperPermission,
} from '../services/auth';

import local from '../config/upload/local';
import aws from '../config/upload/aws';
import gcp from '../config/upload/gcp';

let provider = local;
if (process.env.UPLOAD_PROVIDER === 'gcp') provider = gcp;
else if (process.env.UPLOAD_PROVIDER === 'aws') provider = aws;

const TasksResource = {
    resource: Task,
    options: {
        parent: {
            icon: "Task",
        },
        actions: {
            list: {
                isAccessible: ({currentAdmin})=> hasDeveloperPermission(currentAdmin),
            },
            show: {
                isAccessible: ({currentAdmin})=> hasDeveloperPermission(currentAdmin),
            },
            new: {
                isAccessible: ({currentAdmin})=> hasDeveloperPermission(currentAdmin),
            },
            edit: {
                isAccessible: ({currentAdmin})=> hasDeveloperPermission(currentAdmin),
            },
            delete: {
                isAccessible: ({currentAdmin})=> hasDeveloperPermission(currentAdmin),
            },
        },
        properties: {
            id: {
                position: 1,
            },
            title: {
                position: 2,
                isRequired: true,
            },
            description: {
                position: 3,
                isVisible: { list: false, filter: false, show: true, edit: true, },
                type: 'richtext',
                props: {
                    quill: {
                        modules: {
                            toolbar: [
                                ['bold', 'italic'],
                                ['link', 'image'],
                            ],
                        },
                    },
                },
            },
            due_date: {
                position: 4,
            },
            effort: {
                position: 5,
            },
            order: {
                position: 6,
            },
            status: {
                position: 7,
                isRequired: true,
                availableValues: [
                    { value: 'backlog', label: 'Aguardando', },
                    { value: 'doing', label: 'Em Execução', },
                    { value: 'done', label: 'Feita', },
                    { value: 'approved', label: 'Aprovada', },
                    { value: 'rejected', label: 'Rejeitada', },
                ],
            },
            projectId: {
                position: 8,
                isRequired: true,
                isVisible: { list: false, filter: true, show: true, edit: true, },
            },
            userId: {
                position: 9,
                isRequired: true,
            },
            createdAt: {
                position: 10,
                isVisible: { list: true, filter: true, show: true, edit: false, },
            },
            updatedAt: {
                position: 11,
                isVisible: { list: false, filter: true, show: true, edit: false, },
            },
            attachment: {
                position: 12,
            },
            user_id: {
                isVisible: false,
            },
            project_id: {
                isVisible: false,
            },
            path: { isVisible: false, },
            folder: { isVisible: false, },
            type: { isVisible: false, },
            filename: { isVisible: false, },
            size: { isVisible: false, },
        },
    },
    features: [
        uploadFeature({
            provider,
            properties: {
                key: 'path',
                bucket: 'folder',
                mimeType: 'type',
                size: 'size',
                filename: 'filename',
                file: 'attachment',
            },
            validations: {
                mimeTypes: ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf', 'application/zip',],
                maxSize: 1024 * 1024 * 20,
            }
        }),
    ],
}

export { TasksResource }
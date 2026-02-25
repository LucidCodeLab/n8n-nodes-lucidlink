import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['update'], resource: ['permission'] };

export const permissionUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Permission ID',
		name: 'permissionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the permission to update',
	},
	{
		displayName: 'Permissions',
		name: 'permissions',
		type: 'multiOptions',
		required: true,
		default: ['read'],
		displayOptions: { show },
		options: [
			{ name: 'Read', value: 'read' },
			{ name: 'Write', value: 'write' },
		],
		routing: {
			send: { type: 'body', property: 'permissions' },
		},
	},
];

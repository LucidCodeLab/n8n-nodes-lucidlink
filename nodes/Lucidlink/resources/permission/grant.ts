import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['grant'], resource: ['permission'] };

export const permissionGrantDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'string',
		required: true,
		default: '/',
		displayOptions: { show },
		description:
			'Full filesystem path to a directory to grant access to (e.g. /Documents/Project). Root is "/".',
		routing: {
			send: { type: 'body', property: 'path' },
		},
	},
	{
		displayName: 'Principal ID',
		name: 'principalId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the member or group to grant access to',
		routing: {
			send: { type: 'body', property: 'principalId' },
		},
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

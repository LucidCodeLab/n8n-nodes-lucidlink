import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['getAll'], resource: ['group'] };

export const groupGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Filter by Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: { show },
		description: 'Filter groups by name (optional)',
		routing: {
			send: { type: 'query', property: 'name', value: '={{$value || undefined}}' },
		},
	},
];

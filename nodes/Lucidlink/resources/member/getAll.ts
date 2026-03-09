import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['getAll'], resource: ['member'] };

export const memberGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Filter by Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		default: '',
		displayOptions: { show },
		description: 'Filter members by email address (optional)',
		routing: {
			send: { type: 'query', property: 'email', value: '={{$value || undefined}}' },
		},
	},
];

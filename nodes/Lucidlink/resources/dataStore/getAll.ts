import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['getAll'], resource: ['dataStore'] };

export const dataStoreGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Filter by Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: { show },
		description: 'Filter data stores by name (optional)',
		routing: {
			send: { type: 'query', property: 'name', value: '={{$value || undefined}}' },
		},
	},
];

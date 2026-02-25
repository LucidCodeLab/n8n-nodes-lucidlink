import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['list'], resource: ['permission'] };

export const permissionListDescription: INodeProperties[] = [
	{
		displayName: 'Filter by Principal ID',
		name: 'principalId',
		type: 'string',
		default: '',
		displayOptions: { show },
		description: 'Filter permissions by principal (member or group) ID (optional)',
		routing: {
			send: { type: 'query', property: 'principalId' },
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: { minValue: 1, maxValue: 100 },
		default: 50,
		displayOptions: { show },
		description: 'Max number of results to return',
		routing: {
			send: { type: 'query', property: 'limit' },
		},
	},
	{
		displayName: 'Next Cursor',
		name: 'nextCursor',
		type: 'string',
		default: '',
		displayOptions: { show },
		description:
			'Pagination cursor from the previous response. Leave empty to start from the beginning.',
		routing: {
			send: { type: 'query', property: 'nextCursor' },
		},
	},
];

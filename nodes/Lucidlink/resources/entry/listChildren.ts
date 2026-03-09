import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['listChildren'], resource: ['entry'] };

export const entryListChildrenDescription: INodeProperties[] = [
	{
		displayName: 'Entry ID',
		name: 'entryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the directory entry whose children to list',
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
			send: {
				type: 'query',
				property: 'limit',
			},
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
			send: {
				type: 'query',
				property: 'nextCursor',
				value: '={{$value || undefined}}',
			},
		},
	},
];

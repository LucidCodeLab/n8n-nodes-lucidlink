import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['listIds'], resource: ['externalEntry'] };

export const externalEntryListIdsDescription: INodeProperties[] = [
	{
		displayName: 'Data Store ID',
		name: 'dataStoreId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the data store to list external entries for',
		routing: {
			send: { type: 'query', property: 'dataStoreId' },
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: { minValue: 1, maxValue: 50000 },
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

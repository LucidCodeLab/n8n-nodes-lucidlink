import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['delete'], resource: ['dataStore'] };

export const dataStoreDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Data Store ID',
		name: 'dataStoreId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the data store to delete. Cannot delete a data store with linked files.',
	},
];

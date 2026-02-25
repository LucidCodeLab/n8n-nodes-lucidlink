import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['get'], resource: ['dataStore'] };

export const dataStoreGetDescription: INodeProperties[] = [
	{
		displayName: 'Data Store ID',
		name: 'dataStoreId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the data store to retrieve',
	},
];

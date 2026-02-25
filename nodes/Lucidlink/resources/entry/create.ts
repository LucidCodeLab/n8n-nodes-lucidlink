import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['entry'] };

export const entryCreateDescription: INodeProperties[] = [
	{
		displayName: 'Parent Entry ID',
		name: 'parentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the parent directory in which to create the new entry',
		routing: {
			send: { type: 'body', property: 'parentId' },
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Name of the directory to create',
		routing: {
			send: { type: 'body', property: 'name' },
		},
	},
];

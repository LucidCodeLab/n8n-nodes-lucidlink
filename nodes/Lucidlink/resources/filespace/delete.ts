import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['delete'], resource: ['filespace'] };

export const filespaceDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Filespace ID',
		name: 'filespaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the filespace to delete',
	},
];

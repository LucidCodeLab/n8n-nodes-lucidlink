import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['get'], resource: ['filespace'] };

export const filespaceGetDescription: INodeProperties[] = [
	{
		displayName: 'Filespace ID',
		name: 'filespaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the filespace to retrieve',
	},
];

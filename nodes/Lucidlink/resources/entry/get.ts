import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['get'], resource: ['entry'] };

export const entryGetDescription: INodeProperties[] = [
	{
		displayName: 'Entry ID',
		name: 'entryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the filesystem entry to retrieve',
	},
];

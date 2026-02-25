import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['delete'], resource: ['entry'] };

export const entryDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Entry ID',
		name: 'entryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the directory entry to delete. Directory must be empty.',
	},
];

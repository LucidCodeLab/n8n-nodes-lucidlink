import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['delete'], resource: ['externalEntry'] };

export const externalEntryDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Entry ID',
		name: 'entryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the external entry to delete',
	},
];

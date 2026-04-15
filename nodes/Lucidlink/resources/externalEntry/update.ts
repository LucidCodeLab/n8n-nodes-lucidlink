import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['update'], resource: ['externalEntry'] };

export const externalEntryUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Entry ID',
		name: 'entryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the external entry to update',
	},
	{
		displayName: 'HTTP File URL',
		name: 'httpFileUrl',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'New HTTP or HTTPS URL for the linked file',
		routing: {
			send: { type: 'body', property: 'httpFileParams.url' },
		},
	},
];

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
		description: 'ID of the external entry to update. Only HttpLinkFile entries can be updated.',
	},
	{
		displayName: 'HTTP File URL',
		name: 'httpFileUrl',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description:
			'New HTTP or HTTPS URL for the linked file. Its content size must match the original file size.',
		routing: {
			send: { type: 'body', property: 'httpFileParams.url' },
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show },
		options: [
			{
				displayName: 'File Size',
				name: 'size',
				type: 'number',
				default: 0,
				description:
					'Size of the file at the new URL, in bytes. When set, the access check (HEAD request) against the URL is skipped.',
				routing: {
					send: { type: 'body', property: 'httpFileParams.size' },
				},
			},
		],
	},
];

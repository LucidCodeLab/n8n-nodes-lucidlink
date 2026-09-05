import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['serviceAccountKey'] };

export const serviceAccountKeyCreateDescription: INodeProperties[] = [
	{
		displayName: 'Single Use',
		name: 'isSingleUse',
		type: 'boolean',
		default: false,
		displayOptions: { show },
		description: 'Whether the token is invalidated after its first use',
		routing: {
			send: { type: 'body', property: 'isSingleUse' },
		},
	},
	{
		displayName: 'Expires At',
		name: 'expiresAt',
		type: 'dateTime',
		default: '',
		displayOptions: { show },
		description: 'Expiry date and time for the token. Leave empty for a non-expiring token.',
		routing: {
			send: { type: 'body', property: 'expiresAt' },
		},
	},
];

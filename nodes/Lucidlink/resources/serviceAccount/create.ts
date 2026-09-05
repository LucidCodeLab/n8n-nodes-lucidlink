import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['serviceAccount'] };
const showInitialKey = { ...show, createInitialKey: [true] };

export const serviceAccountCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Display name for the service account',
		routing: {
			send: { type: 'body', property: 'name' },
		},
	},
	{
		displayName: 'Create Initial Key',
		name: 'createInitialKey',
		type: 'boolean',
		default: false,
		displayOptions: { show },
		description:
			'Whether to create an initial key alongside the service account. The key token is returned only once, in this response.',
	},
	{
		displayName: 'Single Use',
		name: 'isSingleUse',
		type: 'boolean',
		default: false,
		displayOptions: { show: showInitialKey },
		description: 'Whether the token is invalidated after its first use',
		routing: {
			send: { type: 'body', property: 'serviceIdentity.isSingleUse' },
		},
	},
	{
		displayName: 'Expires At',
		name: 'expiresAt',
		type: 'dateTime',
		default: '',
		displayOptions: { show: showInitialKey },
		description: 'Expiry date and time for the token. Leave empty for a non-expiring token.',
		routing: {
			send: { type: 'body', property: 'serviceIdentity.expiresAt' },
		},
	},
];

import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['delete'], resource: ['serviceAccountKey'] };

export const serviceAccountKeyDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Key ID',
		name: 'keyId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the key to delete. Its token is revoked immediately.',
	},
];

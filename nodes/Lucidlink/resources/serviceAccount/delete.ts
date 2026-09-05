import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['delete'], resource: ['serviceAccount'] };

export const serviceAccountDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Service Account ID',
		name: 'serviceAccountId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description:
			'ID of the service account to delete. Deleting it revokes every key that belongs to it.',
	},
];

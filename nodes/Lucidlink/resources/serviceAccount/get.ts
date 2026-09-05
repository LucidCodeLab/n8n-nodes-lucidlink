import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['get'], resource: ['serviceAccount'] };

export const serviceAccountGetDescription: INodeProperties[] = [
	{
		displayName: 'Service Account ID',
		name: 'serviceAccountId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the service account to retrieve',
	},
];

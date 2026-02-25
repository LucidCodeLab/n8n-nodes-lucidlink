import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['update'], resource: ['filespace'] };

export const filespaceUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Filespace ID',
		name: 'filespaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the filespace to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description:
			'New filespace name. Lowercase letters, numbers and dashes only; cannot start or end with a dash. 2–30 characters.',
		routing: {
			send: { type: 'body', property: 'name' },
		},
	},
];

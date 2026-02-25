import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['group'] };

export const groupCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Name of the group (1–128 characters)',
		routing: {
			send: { type: 'body', property: 'name' },
		},
	},
];

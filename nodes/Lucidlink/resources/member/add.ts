import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['add'], resource: ['member'] };

export const memberAddDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Email address of the user to invite to the workspace',
		routing: {
			send: { type: 'body', property: 'email' },
		},
	},
];

import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['update'], resource: ['group'] };

export const groupUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the group to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'New name for the group (1–128 characters)',
		routing: {
			send: { type: 'body', property: 'name' },
		},
	},
];

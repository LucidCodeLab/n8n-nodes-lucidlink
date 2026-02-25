import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['delete'], resource: ['group'] };

export const groupDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the group to remove from the workspace',
	},
];

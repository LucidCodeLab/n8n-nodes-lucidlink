import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['get'], resource: ['group'] };

export const groupGetDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the group to retrieve',
	},
];

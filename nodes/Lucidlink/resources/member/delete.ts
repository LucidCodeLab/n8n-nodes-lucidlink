import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['delete'], resource: ['member'] };

export const memberDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Member ID',
		name: 'memberId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the workspace member to remove',
	},
];

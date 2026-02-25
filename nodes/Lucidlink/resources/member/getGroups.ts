import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['getGroups'], resource: ['member'] };

export const memberGetGroupsDescription: INodeProperties[] = [
	{
		displayName: 'Member ID',
		name: 'memberId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the workspace member whose groups to retrieve',
	},
];

import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['addMember'], resource: ['group'] };

export const groupAddMemberDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the group to add the member to',
	},
	{
		displayName: 'Member ID',
		name: 'memberId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the workspace member to add',
	},
];

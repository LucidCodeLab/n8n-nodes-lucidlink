import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['removeMember'], resource: ['group'] };

export const groupRemoveMemberDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the group to remove the member from',
	},
	{
		displayName: 'Member ID',
		name: 'memberId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the member to remove',
	},
];

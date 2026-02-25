import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['getMembers'], resource: ['group'] };

export const groupGetMembersDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the group whose members to list',
	},
];

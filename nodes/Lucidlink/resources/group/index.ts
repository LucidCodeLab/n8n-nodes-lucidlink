import type { INodeProperties } from 'n8n-workflow';
import { groupCreateDescription } from './create';
import { groupGetAllDescription } from './getAll';
import { groupGetDescription } from './get';
import { groupUpdateDescription } from './update';
import { groupDeleteDescription } from './delete';
import { groupGetMembersDescription } from './getMembers';
import { groupAddMemberDescription } from './addMember';
import { groupAddMembersBulkDescription } from './addMembersBulk';
import { groupRemoveMemberDescription } from './removeMember';

export const groupDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['group'] } },
		options: [
			{
				name: 'Add Member',
				value: 'addMember',
				action: 'Add a member to a group',
				description: 'Add a workspace member to a group',
				routing: {
					request: {
						method: 'PUT',
						url: '=/api/v1/groups/{{$parameter["groupId"]}}/members/{{$parameter["memberId"]}}',
					},
				},
			},
			{
				name: 'Add Members (Bulk)',
				value: 'addMembersBulk',
				action: 'Bulk add members to groups',
				description: 'Add multiple members to groups in one request',
				routing: {
					request: {
						method: 'PUT',
						url: '/api/v1/groups/members',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a group',
				description: 'Create a new group in the workspace',
				routing: {
					request: { method: 'POST', url: '/api/v1/groups' },
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a group',
				description: 'Remove a group from the workspace',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/groups/{{$parameter["groupId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a group',
				description: 'Get a group by its principal ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/groups/{{$parameter["groupId"]}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many groups',
				description: 'Get workspace groups list',
				routing: {
					request: { method: 'GET', url: '/api/v1/groups' },
				},
			},
			{
				name: 'Get Members',
				value: 'getMembers',
				action: 'Get group members',
				description: 'List all members in a group',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/groups/{{$parameter["groupId"]}}/members',
					},
				},
			},
			{
				name: 'Remove Member',
				value: 'removeMember',
				action: 'Remove a member from a group',
				description: 'Remove a workspace member from a group',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/groups/{{$parameter["groupId"]}}/members/{{$parameter["memberId"]}}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a group',
				description: 'Update group properties',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/groups/{{$parameter["groupId"]}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...groupCreateDescription,
	...groupGetAllDescription,
	...groupGetDescription,
	...groupUpdateDescription,
	...groupDeleteDescription,
	...groupGetMembersDescription,
	...groupAddMemberDescription,
	...groupAddMembersBulkDescription,
	...groupRemoveMemberDescription,
];

import type { INodeProperties } from 'n8n-workflow';
import { memberAddDescription } from './add';
import { memberGetAllDescription } from './getAll';
import { memberGetDescription } from './get';
import { memberUpdateDescription } from './update';
import { memberDeleteDescription } from './delete';
import { memberGetGroupsDescription } from './getGroups';

export const memberDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['member'] } },
		options: [
			{
				name: 'Add',
				value: 'add',
				action: 'Add a member to the workspace',
				description: 'Invite a user to the workspace by email',
				routing: {
					request: { method: 'POST', url: '/api/v1/members' },
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Remove a member from the workspace',
				description: 'Remove a member from the workspace',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/members/{{$parameter["memberId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a member',
				description: 'Get a workspace member by principal ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/members/{{$parameter["memberId"]}}',
					},
				},
			},
			{
				name: 'Get Groups',
				value: 'getGroups',
				action: 'Get a member s groups',
				description: 'Get the groups that a member belongs to',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/members/{{$parameter["memberId"]}}/groups',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many members',
				description: 'Get the workspace members list',
				routing: {
					request: { method: 'GET', url: '/api/v1/members' },
				},
			},
			{
				name: 'Update Role',
				value: 'update',
				action: 'Update a member role',
				description: 'Update the role of a workspace member',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/members/{{$parameter["memberId"]}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...memberAddDescription,
	...memberGetAllDescription,
	...memberGetDescription,
	...memberUpdateDescription,
	...memberDeleteDescription,
	...memberGetGroupsDescription,
];

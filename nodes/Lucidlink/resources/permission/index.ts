import type { INodeProperties } from 'n8n-workflow';
import { permissionGrantDescription } from './grant';
import { permissionListDescription } from './list';
import { permissionUpdateDescription } from './update';
import { permissionRevokeDescription } from './revoke';

export const permissionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['permission'] } },
		options: [
			{
				name: 'Grant',
				value: 'grant',
				action: 'Grant a permission',
				description: 'Grant access to a principal for a filesystem directory',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/permissions',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				action: 'List permissions',
				description: 'List permissions for a filespace',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/permissions',
					},
				},
			},
			{
				name: 'Revoke',
				value: 'revoke',
				action: 'Revoke a permission',
				description: 'Remove a permission from a filespace',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/permissions/{{$parameter["permissionId"]}}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a permission',
				description: 'Change the permissions for an existing permission entry',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/permissions/{{$parameter["permissionId"]}}',
					},
				},
			},
		],
		default: 'list',
	},
	...permissionGrantDescription,
	...permissionListDescription,
	...permissionUpdateDescription,
	...permissionRevokeDescription,
];

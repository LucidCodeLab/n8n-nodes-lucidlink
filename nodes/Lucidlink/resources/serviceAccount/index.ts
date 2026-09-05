import type { INodeProperties } from 'n8n-workflow';
import { pruneEmptyBodyValues } from '../../helpers';
import { serviceAccountCreateDescription } from './create';
import { serviceAccountGetAllDescription } from './getAll';
import { serviceAccountGetDescription } from './get';
import { serviceAccountDeleteDescription } from './delete';

export const serviceAccountDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['serviceAccount'] } },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a service account',
				description:
					'Create a service account, optionally with an initial key. A key token is returned only once, at creation time.',
				routing: {
					request: { method: 'POST', url: '/api/v1/service-accounts' },
					send: { preSend: [pruneEmptyBodyValues] },
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a service account',
				description: 'Delete a service account, revoking all of its keys',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/service-accounts/{{$parameter["serviceAccountId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a service account',
				description: 'Get a service account by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/service-accounts/{{$parameter["serviceAccountId"]}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many service accounts',
				description: 'List many service accounts in the workspace',
				routing: {
					request: { method: 'GET', url: '/api/v1/service-accounts' },
				},
			},
		],
		default: 'getAll',
	},
	...serviceAccountCreateDescription,
	...serviceAccountGetAllDescription,
	...serviceAccountGetDescription,
	...serviceAccountDeleteDescription,
];

import type { INodeProperties } from 'n8n-workflow';
import { pruneEmptyBodyValues } from '../../helpers';
import { serviceAccountKeyCreateDescription } from './create';
import { serviceAccountKeyDeleteDescription } from './delete';

export const serviceAccountKeyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['serviceAccountKey'] } },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a service account key',
				description:
					'Create a new key for a service account. The token is returned only once, in this response.',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/service-accounts/{{$parameter["serviceAccountId"]}}/keys',
					},
					send: { preSend: [pruneEmptyBodyValues] },
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a service account key',
				description: 'Delete a key, immediately revoking its token',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/service-accounts/{{$parameter["serviceAccountId"]}}/keys/{{$parameter["keyId"]}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many service account keys',
				description: 'List many keys belonging to a service account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/service-accounts/{{$parameter["serviceAccountId"]}}/keys',
					},
				},
			},
		],
		default: 'getAll',
	},
	// Shared serviceAccountId — every key operation is scoped to a service account
	{
		displayName: 'Service Account ID',
		name: 'serviceAccountId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['serviceAccountKey'] } },
		description: 'ID of the service account that owns the key',
	},
	...serviceAccountKeyCreateDescription,
	...serviceAccountKeyDeleteDescription,
];

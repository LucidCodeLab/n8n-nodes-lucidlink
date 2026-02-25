import type { INodeProperties } from 'n8n-workflow';
import { filespaceCreateDescription } from './create';
import { filespaceGetAllDescription } from './getAll';
import { filespaceGetDescription } from './get';
import { filespaceUpdateDescription } from './update';
import { filespaceDeleteDescription } from './delete';

export const filespaceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['filespace'] } },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a filespace',
				description: 'Create a new filespace',
				routing: {
					request: { method: 'POST', url: '/api/v1/filespaces' },
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a filespace',
				description: 'Delete a filespace',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a filespace',
				description: 'Get information for a single filespace',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many filespaces',
				description: 'Get information for many filespaces',
				routing: {
					request: { method: 'GET', url: '/api/v1/filespaces' },
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a filespace',
				description: 'Update the name of a filespace',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...filespaceGetAllDescription,
	...filespaceGetDescription,
	...filespaceCreateDescription,
	...filespaceUpdateDescription,
	...filespaceDeleteDescription,
];

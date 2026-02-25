import type { INodeProperties } from 'n8n-workflow';
import { entryCreateDescription } from './create';
import { entryGetDescription } from './get';
import { entryResolveDescription } from './resolve';
import { entryListChildrenDescription } from './listChildren';
import { entryDeleteDescription } from './delete';

export const entryDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['entry'] } },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a directory entry',
				description: 'Create a new directory in the filespace',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/entries',
						body: { type: 'dir' },
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an entry',
				description: 'Delete an empty directory from the filespace',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/entries/{{$parameter["entryId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an entry',
				description: 'Get a filesystem entry by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/entries/{{$parameter["entryId"]}}',
					},
				},
			},
			{
				name: 'List Children',
				value: 'listChildren',
				action: 'List directory children',
				description: 'List entries within a directory',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/entries/{{$parameter["entryId"]}}/children',
					},
				},
			},
			{
				name: 'Resolve Path',
				value: 'resolve',
				action: 'Resolve a path to an entry',
				description: 'Look up a filesystem entry by its path',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/entries/resolve',
					},
				},
			},
		],
		default: 'get',
	},
	...entryCreateDescription,
	...entryGetDescription,
	...entryResolveDescription,
	...entryListChildrenDescription,
	...entryDeleteDescription,
];

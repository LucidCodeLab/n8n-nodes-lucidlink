import type { INodeProperties } from 'n8n-workflow';
import { externalEntryCreateDescription } from './create';
import { externalEntryListIdsDescription } from './listIds';
import { externalEntryDeleteDescription } from './delete';

export const externalEntryDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['externalEntry'] } },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create an external entry',
				description: 'Link an S3 object as a file entry in the filespace',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/entries',
						body: { kind: 'SingleObjectFile' },
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an external entry',
				description: 'Remove an external file entry from the filespace',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/entries/{{$parameter["entryId"]}}',
					},
				},
			},
			{
				name: 'List IDs',
				value: 'listIds',
				action: 'List external entry i ds',
				description: 'List all external entry IDs for a given data store',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/entries/ids',
					},
				},
			},
		],
		default: 'listIds',
	},
	...externalEntryCreateDescription,
	...externalEntryListIdsDescription,
	...externalEntryDeleteDescription,
];

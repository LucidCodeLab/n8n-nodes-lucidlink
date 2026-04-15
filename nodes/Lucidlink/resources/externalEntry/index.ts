import type { INodeProperties } from 'n8n-workflow';
import { externalEntryCreateDescription } from './create';
import { externalEntryListIdsDescription } from './listIds';
import { externalEntryDeleteDescription } from './delete';
import { externalEntryUpdateDescription } from './update';

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
				description: 'Link an S3 object or HTTP file as an entry in the filespace',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/entries',
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
			{
				name: 'Update',
				value: 'update',
				action: 'Update an external entry',
				description: 'Update the URL of an existing HTTP link file entry',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/entries/{{$parameter["entryId"]}}',
					},
				},
			},
		],
		default: 'listIds',
	},
	...externalEntryCreateDescription,
	...externalEntryListIdsDescription,
	...externalEntryDeleteDescription,
	...externalEntryUpdateDescription,
];

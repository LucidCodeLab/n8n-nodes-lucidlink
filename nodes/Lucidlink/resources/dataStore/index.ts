import type { INodeProperties } from 'n8n-workflow';
import { dataStoreCreateDescription } from './create';
import { dataStoreGetAllDescription } from './getAll';
import { dataStoreGetDescription } from './get';
import { dataStoreUpdateDescription } from './update';
import { dataStoreDeleteDescription } from './delete';

export const dataStoreDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['dataStore'] } },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a data store',
				description: 'Create a new S3 data store',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/data-stores',
						body: { kind: 'S3DataStore' },
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a data store',
				description: 'Delete a data store by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/data-stores/{{$parameter["dataStoreId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a data store',
				description: 'Get information about a data store',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/data-stores/{{$parameter["dataStoreId"]}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many data stores',
				description: 'List many data stores in the filespace',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/data-stores',
					},
				},
			},
			{
				name: 'Update Credentials',
				value: 'update',
				action: 'Update data store credentials',
				description: 'Update the S3 access key and secret key for a data store',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/external/data-stores/{{$parameter["dataStoreId"]}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...dataStoreCreateDescription,
	...dataStoreGetAllDescription,
	...dataStoreGetDescription,
	...dataStoreUpdateDescription,
	...dataStoreDeleteDescription,
];

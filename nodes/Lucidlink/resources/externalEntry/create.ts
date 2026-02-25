import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['externalEntry'] };

export const externalEntryCreateDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description:
			'Full filesystem path for the new external file entry (e.g. /Documents/report.pdf)',
		routing: {
			send: { type: 'body', property: 'path' },
		},
	},
	{
		displayName: 'Data Store ID',
		name: 'dataStoreId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the data store that holds the S3 credentials',
		routing: {
			send: { type: 'body', property: 'dataStoreId' },
		},
	},
	{
		displayName: 'S3 Object ID',
		name: 'objectId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Object key (path) of the file within the S3 bucket',
		routing: {
			send: { type: 'body', property: 'singleObjectFileParams.objectId' },
		},
	},
];

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
		displayName: 'Kind',
		name: 'kind',
		type: 'options',
		required: true,
		default: 'SingleObjectFile',
		displayOptions: { show },
		options: [
			{
				name: 'Single Object File (S3)',
				value: 'SingleObjectFile',
				description: 'Link a file from an S3 bucket via a data store',
			},
			{
				name: 'HTTP Link File',
				value: 'HttpLinkFile',
				description: 'Link a file accessible via a public HTTP/HTTPS URL',
			},
		],
		routing: {
			send: { type: 'body', property: 'kind' },
		},
	},
	{
		displayName: 'Data Store ID',
		name: 'dataStoreId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { ...show, kind: ['SingleObjectFile'] } },
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
		displayOptions: { show: { ...show, kind: ['SingleObjectFile'] } },
		description: 'Object key (path) of the file within the S3 bucket',
		routing: {
			send: { type: 'body', property: 'singleObjectFileParams.objectId' },
		},
	},
	{
		displayName: 'HTTP File URL',
		name: 'httpFileUrl',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { ...show, kind: ['HttpLinkFile'] } },
		description: 'Publicly accessible HTTP or HTTPS URL of the file to link',
		routing: {
			send: { type: 'body', property: 'httpFileParams.url' },
		},
	},
];

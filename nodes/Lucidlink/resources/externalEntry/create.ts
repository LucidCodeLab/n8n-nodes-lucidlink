import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['externalEntry'] };
const showSingleObject = { ...show, kind: ['SingleObjectFile'] };
const showHttpLink = { ...show, kind: ['HttpLinkFile'] };

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
		displayOptions: { show: showSingleObject },
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
		displayOptions: { show: showSingleObject },
		description: 'Object key (path) of the file within the S3 bucket',
		routing: {
			send: { type: 'body', property: 'singleObjectFileParams.objectId' },
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'singleObjectAdditionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showSingleObject },
		description:
			'Object metadata. Supplying both Object Checksum and Object Size skips the access check (HEAD request) against the bucket. The API requires both together, so set both or neither.',
		options: [
			{
				displayName: 'Object Checksum',
				name: 'checksum',
				type: 'string',
				default: '',
				description: 'Checksum of the S3 object. Must be set together with Object Size.',
				routing: {
					send: { type: 'body', property: 'singleObjectFileParams.metadata.checksum' },
				},
			},
			{
				displayName: 'Object Size',
				name: 'size',
				type: 'number',
				default: 0,
				description: 'Size of the S3 object in bytes. Must be set together with Object Checksum.',
				routing: {
					send: { type: 'body', property: 'singleObjectFileParams.metadata.size' },
				},
			},
		],
	},
	{
		displayName: 'HTTP File URL',
		name: 'httpFileUrl',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showHttpLink },
		description: 'Publicly accessible HTTP or HTTPS URL of the file to link',
		routing: {
			send: { type: 'body', property: 'httpFileParams.url' },
		},
	},
	{
		displayName: 'HTTP Link Data Store ID',
		name: 'httpLinkDataStoreId',
		type: 'string',
		default: '',
		displayOptions: { show: showHttpLink },
		description:
			'ID of an HTTP link data store. Required on filespace format 3.7 and above; must be left empty on 3.6 and below. Create one with Data Store > Create using kind HttpLinkDataStore.',
		routing: {
			send: { type: 'body', property: 'dataStoreId' },
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'httpFileAdditionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showHttpLink },
		options: [
			{
				displayName: 'File Size',
				name: 'size',
				type: 'number',
				default: 0,
				description:
					'Size of the HTTP file in bytes. When set, the access check (HEAD request) against the URL is skipped.',
				routing: {
					send: { type: 'body', property: 'httpFileParams.size' },
				},
			},
		],
	},
];

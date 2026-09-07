import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['dataStore'] };
const showS3 = { ...show, kind: ['S3DataStore'] };

export const dataStoreCreateDescription: INodeProperties[] = [
	{
		displayName: 'Kind',
		name: 'kind',
		type: 'options',
		required: true,
		default: 'S3DataStore',
		displayOptions: { show },
		description: 'Type of data store to create',
		options: [
			{
				name: 'HTTP Link Data Store',
				value: 'HttpLinkDataStore',
				description:
					'Data store for HTTP links. Requires filespace format 3.7 or above — older filespaces reject this kind as an unsupported data store type, and do not need one. No other parameters are required.',
			},
			{
				name: 'S3 Data Store',
				value: 'S3DataStore',
				description: 'Data store backed by S3 cloud object storage. Requires S3 credentials.',
			},
		],
		routing: {
			send: { type: 'body', property: 'kind' },
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Name for this data store',
		routing: {
			send: { type: 'body', property: 'name' },
		},
	},
	{
		displayName: 'S3 Access Key',
		name: 's3AccessKey',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showS3 },
		description: 'Access key for authenticating with S3 cloud storage',
		routing: {
			send: { type: 'body', property: 's3StorageParams.accessKey' },
		},
	},
	{
		displayName: 'S3 Secret Key',
		name: 's3SecretKey',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		default: '',
		displayOptions: { show: showS3 },
		description: 'Secret key for authenticating with S3 cloud storage',
		routing: {
			send: { type: 'body', property: 's3StorageParams.secretKey' },
		},
	},
	{
		displayName: 'S3 Bucket Name',
		name: 's3BucketName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showS3 },
		description: 'Name of the S3 bucket',
		routing: {
			send: { type: 'body', property: 's3StorageParams.bucketName' },
		},
	},
	{
		displayName: 'Use Virtual Addressing',
		name: 's3UseVirtualAddressing',
		type: 'boolean',
		required: true,
		default: true,
		displayOptions: { show: showS3 },
		description:
			'Whether to use virtual-hosted-style addressing (true for standard AWS S3; false for path-style / custom endpoints)',
		routing: {
			send: { type: 'body', property: 's3StorageParams.useVirtualAddressing' },
		},
	},
	{
		displayName: 'S3 Region',
		name: 's3Region',
		type: 'string',
		default: '',
		displayOptions: { show: showS3 },
		description:
			'AWS region (e.g. us-east-1). Either Region or Endpoint must be provided. Leave empty to omit it.',
		routing: {
			send: { type: 'body', property: 's3StorageParams.region' },
		},
	},
	{
		displayName: 'S3 Endpoint',
		name: 's3Endpoint',
		type: 'string',
		default: '',
		displayOptions: { show: showS3 },
		description:
			'Custom endpoint URL (e.g. https://s3.amazonaws.com). Either Region or Endpoint must be provided. Leave empty to omit it.',
		routing: {
			send: { type: 'body', property: 's3StorageParams.endpoint' },
		},
	},
	{
		displayName: 'URL Expiration (Minutes)',
		name: 's3UrlExpirationMinutes',
		type: 'number',
		typeOptions: { minValue: 4320, maxValue: 10080 },
		default: 10080,
		displayOptions: { show: showS3 },
		description: 'Expiration time for presigned URLs (4320–10080 minutes, default 10080)',
		routing: {
			send: { type: 'body', property: 's3StorageParams.urlExpirationMinutes' },
		},
	},
];

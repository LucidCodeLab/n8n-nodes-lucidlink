import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['dataStore'] };

export const dataStoreCreateDescription: INodeProperties[] = [
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
		displayOptions: { show },
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
		displayOptions: { show },
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
		displayOptions: { show },
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
		displayOptions: { show },
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
		displayOptions: { show },
		description: 'AWS region (e.g. us-east-1). Either Region or Endpoint must be provided.',
		routing: {
			send: { type: 'body', property: 's3StorageParams.region' },
		},
	},
	{
		displayName: 'S3 Endpoint',
		name: 's3Endpoint',
		type: 'string',
		default: '',
		displayOptions: { show },
		description:
			'Custom endpoint URL (e.g. https://s3.amazonaws.com). Either Region or Endpoint must be provided.',
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
		displayOptions: { show },
		description: 'Expiration time for presigned URLs (4320–10080 minutes, default 10080)',
		routing: {
			send: { type: 'body', property: 's3StorageParams.urlExpirationMinutes' },
		},
	},
];

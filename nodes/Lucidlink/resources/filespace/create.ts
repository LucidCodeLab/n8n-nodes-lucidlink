import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['create'], resource: ['filespace'] };
const showCustomer = { operation: ['create'], resource: ['filespace'], storageOwner: ['customer'] };

export const filespaceCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description:
			'Filespace name. Lowercase letters, numbers and dashes only; cannot start or end with a dash. 2–30 characters.',
		routing: {
			send: { type: 'body', property: 'name' },
		},
	},
	{
		displayName: 'Storage Owner',
		name: 'storageOwner',
		type: 'options',
		required: true,
		default: 'lucidlink',
		displayOptions: { show },
		options: [
			{
				name: 'LucidLink',
				value: 'lucidlink',
				description: 'LucidLink provides S3 storage',
			},
			{
				name: 'Customer',
				value: 'customer',
				description: 'Use your own cloud storage provider',
			},
		],
		routing: {
			send: { type: 'body', property: 'storageOwner' },
		},
	},
	{
		displayName: 'Storage Provider',
		name: 'storageProvider',
		type: 'string',
		required: true,
		default: 'AWS',
		displayOptions: { show },
		description:
			'Storage provider name (e.g. AWS, Other). Use Provider > Get All to see available providers.',
		routing: {
			send: { type: 'body', property: 'storageProvider' },
		},
	},
	{
		displayName: 'Region',
		name: 'region',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description:
			'Storage region (e.g. eu-west-1). Use Provider > Get All to see available regions.',
		routing: {
			send: { type: 'body', property: 'region' },
		},
	},
	{
		displayName: 'Block Size',
		name: 'blockSize',
		type: 'number',
		default: 1024,
		displayOptions: { show },
		description:
			'Block size in KB. Default is 1024 for AWS/BackBlaze, 256 for others. Leave empty to use the default.',
		routing: {
			send: { type: 'body', property: 'blockSize' },
		},
	},
	{
		displayName: 'Customer Storage: Access Key ID',
		name: 'customerAccessKeyId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showCustomer },
		description: 'Access key ID for your cloud storage provider',
		routing: {
			send: { type: 'body', property: 'customerStorageParams.accessKeyId' },
		},
	},
	{
		displayName: 'Customer Storage: Secret Access Key',
		name: 'customerSecretAccessKey',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		default: '',
		displayOptions: { show: showCustomer },
		description: 'Secret access key for your cloud storage provider',
		routing: {
			send: { type: 'body', property: 'customerStorageParams.secretAccessKey' },
		},
	},
	{
		displayName: 'Customer Storage: Endpoint',
		name: 'customerEndpoint',
		type: 'string',
		default: '',
		displayOptions: { show: showCustomer },
		description:
			'Endpoint URL for your storage provider. Required if region is not a known provider region.',
		routing: {
			send: { type: 'body', property: 'customerStorageParams.endpoint' },
		},
	},
	{
		displayName: 'Customer Storage: Bucket Name',
		name: 'customerBucketName',
		type: 'string',
		default: '',
		displayOptions: { show: showCustomer },
		description:
			'Bucket name. If omitted, LucidLink will deduce it from the hostname or attempt to create one.',
		routing: {
			send: { type: 'body', property: 'customerStorageParams.bucketName' },
		},
	},
];

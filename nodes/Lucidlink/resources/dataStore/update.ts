import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['update'], resource: ['dataStore'] };

export const dataStoreUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Data Store ID',
		name: 'dataStoreId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the data store to update',
	},
	{
		displayName: 'S3 Access Key',
		name: 's3AccessKey',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'New access key for the S3 cloud storage',
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
		description: 'New secret key for the S3 cloud storage',
		routing: {
			send: { type: 'body', property: 's3StorageParams.secretKey' },
		},
	},
];

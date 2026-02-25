import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['revoke'], resource: ['permission'] };

export const permissionRevokeDescription: INodeProperties[] = [
	{
		displayName: 'Permission ID',
		name: 'permissionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'ID of the permission to revoke',
	},
];

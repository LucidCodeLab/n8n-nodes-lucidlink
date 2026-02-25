import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['update'], resource: ['member'] };
const showFilespaceAdmin = {
	operation: ['update'],
	resource: ['member'],
	role: ['filespaceAdmin'],
};

export const memberUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Member ID',
		name: 'memberId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		description: 'Principal ID of the workspace member to update',
	},
	{
		displayName: 'Role',
		name: 'role',
		type: 'options',
		required: true,
		default: 'standard',
		displayOptions: { show },
		options: [
			{ name: 'Admin', value: 'admin', description: 'Full workspace admin access' },
			{
				name: 'Filespace Admin',
				value: 'filespaceAdmin',
				description: 'Admin access scoped to specific filespaces',
			},
			{ name: 'Standard', value: 'standard', description: 'Standard user access' },
		],
		routing: {
			send: { type: 'body', property: 'role' },
		},
	},
	{
		displayName: 'Filespace IDs',
		name: 'filespaceIds',
		type: 'string',
		default: '',
		displayOptions: { show: showFilespaceAdmin },
		description:
			'Comma-separated list of filespace IDs this admin has access to. Required when role is Filespace Admin.',
		routing: {
			send: {
				type: 'body',
				property: 'filespaceIds',
				value: '={{$parameter["filespaceIds"].split(",").map((id) => id.trim())}}',
			},
		},
	},
];

import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['resolve'], resource: ['entry'] };

export const entryResolveDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'string',
		required: true,
		default: '/',
		displayOptions: { show },
		description: 'Full filesystem path to resolve, e.g. /Documents/Project. Root path is "/".',
		routing: {
			send: {
				type: 'query',
				property: 'path',
			},
		},
	},
];

import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['generate'], resource: ['directLink'] };

export const directLinkGenerateDescription: INodeProperties[] = [
	{
		displayName: 'Entry ID',
		name: 'entryId',
		type: 'string',
		required: false,
		default: '',
		displayOptions: { show },
		description:
			'ID of the filesystem entry to generate a direct link for. Provide either Entry ID or Path — not both.',
		routing: {
			send: {
				type: 'query',
				property: 'entryId',
				value: '={{$value || undefined}}',
			},
		},
	},
	{
		displayName: 'Path',
		name: 'path',
		type: 'string',
		required: false,
		default: '',
		displayOptions: { show },
		description:
			'Absolute path to the filesystem entry to generate a direct link for, e.g. /Documents/Project. Provide either Entry ID or Path — not both.',
		routing: {
			send: {
				type: 'query',
				property: 'path',
				value: '={{$value || undefined}}',
			},
		},
	},
];

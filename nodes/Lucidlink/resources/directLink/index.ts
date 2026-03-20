import type { INodeProperties } from 'n8n-workflow';
import { directLinkGenerateDescription } from './generate';

export const directLinkDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['directLink'] } },
		options: [
			{
				name: 'Generate',
				value: 'generate',
				action: 'Generate a direct link',
				description: 'Generate a shareable direct link to a filesystem entry',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/filespaces/{{$parameter["filespaceId"]}}/direct-links',
					},
				},
			},
		],
		default: 'generate',
	},
	...directLinkGenerateDescription,
];

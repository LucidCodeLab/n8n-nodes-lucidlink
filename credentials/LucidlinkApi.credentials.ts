import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LucidlinkApi implements ICredentialType {
	name = 'lucidlinkApi';

	displayName = 'LucidLink API';

	icon = 'file:lucidlink.svg' as `file:${string}.svg`;

	documentationUrl = 'https://github.com/LucidCodeLab/n8n-nodes-lucidlink?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:7778',
			required: true,
			description:
				'Base URL of your self-hosted LucidLink instance, e.g. http://localhost:7778',
		},
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Service account bearer token',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api/v1/health',
		},
	};
}

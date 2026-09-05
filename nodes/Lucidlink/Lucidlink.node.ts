import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { unwrapOutput } from './helpers';
import { filespaceDescription } from './resources/filespace';
import { entryDescription } from './resources/entry';
import { dataStoreDescription } from './resources/dataStore';
import { directLinkDescription } from './resources/directLink';
import { externalEntryDescription } from './resources/externalEntry';
import { groupDescription } from './resources/group';
import { memberDescription } from './resources/member';
import { permissionDescription } from './resources/permission';
import { serviceAccountDescription } from './resources/serviceAccount';
import { serviceAccountKeyDescription } from './resources/serviceAccountKey';

export class Lucidlink implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'LucidLink',
		name: 'lucidlink',
		icon: 'file:lucidlink.svg',
		group: ['transform'],
		// v1 returns raw LucidAPI responses (wrapped in `data`); v2 unwraps the envelope and
		// splits lists into one item each. Existing workflows stay pinned to the version they
		// were saved with, so their expressions keep resolving.
		version: [1, 2],
		defaultVersion: 2,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the self-hosted LucidLink LucidAPI',
		defaults: {
			name: 'LucidLink',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'lucidlinkApi', required: true }],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Data Store', value: 'dataStore' },
					{ name: 'Direct Link', value: 'directLink' },
					{ name: 'Entry', value: 'entry' },
					{ name: 'External Entry', value: 'externalEntry' },
					{ name: 'Filespace', value: 'filespace' },
					{ name: 'Group', value: 'group' },
					{ name: 'Health', value: 'health' },
					{ name: 'Member', value: 'member' },
					{ name: 'Permission', value: 'permission' },
					{ name: 'Provider', value: 'provider' },
					{ name: 'Service Account', value: 'serviceAccount' },
					{ name: 'Service Account Key', value: 'serviceAccountKey' },
				],
				default: 'filespace',
				// Attached here rather than per operation: this property is always displayed, so
				// its routing is merged into every request exactly once. Adding it in a second
				// place would unwrap twice and mangle any payload with its own `data` field.
				routing: { output: unwrapOutput },
			},
			// Shared filespaceId — shown for all filespace-scoped resources
			{
				displayName: 'Filespace ID',
				name: 'filespaceId',
				type: 'string',
				required: true,
				default: '',
				displayOptions: {
					show: { resource: ['directLink', 'entry', 'dataStore', 'externalEntry', 'permission'] },
				},
				description: 'ID of the filespace to operate on',
			},
			// Health resource — single operation, inlined
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['health'] } },
				options: [
					{
						name: 'Check',
						value: 'check',
						action: 'Check lucid api health',
						description: 'Check if the LucidAPI instance is responsive',
						routing: {
							request: { method: 'GET', url: '/api/v1/health' },
						},
					},
				],
				default: 'check',
			},
			// Provider resource — single operation, inlined
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['provider'] } },
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get available providers and regions',
						description: 'List many available storage providers and their regions',
						routing: {
							request: { method: 'GET', url: '/api/v1/providers' },
						},
					},
				],
				default: 'getAll',
			},
			...filespaceDescription,
			...entryDescription,
			...dataStoreDescription,
			...directLinkDescription,
			...externalEntryDescription,
			...groupDescription,
			...memberDescription,
			...permissionDescription,
			...serviceAccountDescription,
			...serviceAccountKeyDescription,
		],
	};
}

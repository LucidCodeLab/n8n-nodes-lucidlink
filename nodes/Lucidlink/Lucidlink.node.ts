import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { filespaceDescription } from './resources/filespace';
import { entryDescription } from './resources/entry';
import { dataStoreDescription } from './resources/dataStore';
import { externalEntryDescription } from './resources/externalEntry';
import { groupDescription } from './resources/group';
import { memberDescription } from './resources/member';
import { permissionDescription } from './resources/permission';

export class Lucidlink implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'LucidLink',
		name: 'lucidlink',
		icon: 'file:lucidlink.svg',
		group: ['transform'],
		version: 1,
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
					{ name: 'Entry', value: 'entry' },
					{ name: 'External Entry', value: 'externalEntry' },
					{ name: 'Filespace', value: 'filespace' },
					{ name: 'Group', value: 'group' },
					{ name: 'Health', value: 'health' },
					{ name: 'Member', value: 'member' },
					{ name: 'Permission', value: 'permission' },
					{ name: 'Provider', value: 'provider' },
				],
				default: 'filespace',
			},
			// Shared filespaceId — shown for all filespace-scoped resources
			{
				displayName: 'Filespace ID',
				name: 'filespaceId',
				type: 'string',
				required: true,
				default: '',
				displayOptions: {
					show: { resource: ['entry', 'dataStore', 'externalEntry', 'permission'] },
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
						action: 'Check LucidAPI health',
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
			...externalEntryDescription,
			...groupDescription,
			...memberDescription,
			...permissionDescription,
		],
	};
}

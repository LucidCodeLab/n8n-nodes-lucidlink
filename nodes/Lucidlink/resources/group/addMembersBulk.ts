import type { INodeProperties } from 'n8n-workflow';

const show = { operation: ['addMembersBulk'], resource: ['group'] };

export const groupAddMembersBulkDescription: INodeProperties[] = [
	{
		displayName: 'Memberships',
		name: 'memberships',
		type: 'fixedCollection',
		typeOptions: { multipleValues: true, multipleValueButtonText: 'Add Membership' },
		required: true,
		default: {},
		displayOptions: { show },
		description: 'List of group-member relationships to create (1–100 items)',
		options: [
			{
				name: 'membershipValues',
				displayName: 'Membership',
				values: [
					{
						displayName: 'Group ID',
						name: 'groupId',
						type: 'string',
						required: true,
						default: '',
						description: 'Principal ID of the group',
					},
					{
						displayName: 'Member ID',
						name: 'memberId',
						type: 'string',
						required: true,
						default: '',
						description: 'Principal ID of the member',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'memberships',
				value:
					'={{$parameter["memberships"]["membershipValues"]}}',
			},
		},
	},
];

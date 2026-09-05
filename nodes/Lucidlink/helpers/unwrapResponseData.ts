import type {
	IDataObject,
	IExecuteSingleFunctions,
	INodeExecutionData,
	INodeRequestOutput,
} from 'n8n-workflow';

/**
 * LucidAPI wraps most successful responses in a `data` envelope (`{ data: ... }`), but not all
 * of them — the data store endpoints return their DTO directly, and delete operations return no
 * body at all. From node typeVersion 2 on, the envelope is stripped when present and arrays are
 * split into one item per element; anything else is passed through untouched.
 *
 * On typeVersion 1 the raw response is returned unchanged, so workflows saved against the
 * original node keep working with their existing `$json.data...` expressions.
 */
export async function unwrapResponseData(
	this: IExecuteSingleFunctions,
	items: INodeExecutionData[],
): Promise<INodeExecutionData[]> {
	if (this.getNode().typeVersion < 2) {
		return items;
	}

	return items.flatMap((item) => {
		const json = item.json;
		if (typeof json !== 'object' || json === null || Array.isArray(json) || !('data' in json)) {
			return [item];
		}

		const payload = json.data;
		if (Array.isArray(payload)) {
			return payload.map((entry) => ({
				json: entry as IDataObject,
				pairedItem: item.pairedItem,
			}));
		}
		if (typeof payload !== 'object' || payload === null) {
			return [item];
		}

		return [{ json: payload as IDataObject, pairedItem: item.pairedItem }];
	});
}

/** Shared `routing.output` for every operation that returns a response body */
export const unwrapOutput: INodeRequestOutput = {
	postReceive: [unwrapResponseData],
};

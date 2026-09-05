import type { IDataObject, IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';

const isPlainObject = (value: unknown): value is IDataObject =>
	typeof value === 'object' && value !== null && !Array.isArray(value) && !Buffer.isBuffer(value);

const prune = (target: IDataObject): IDataObject => {
	for (const [key, value] of Object.entries(target)) {
		if (value === undefined || value === null || value === '') {
			delete target[key];
		} else if (isPlainObject(value)) {
			if (Object.keys(prune(value)).length === 0) {
				delete target[key];
			}
		}
	}
	return target;
};

/**
 * Removes empty values (undefined, null, empty string) from the request body so that
 * optional API fields are omitted instead of being sent as empty strings. Nested objects
 * are pruned recursively and dropped entirely when nothing is left in them.
 */
export async function pruneEmptyBodyValues(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	if (isPlainObject(requestOptions.body)) {
		prune(requestOptions.body);
	}
	return requestOptions;
}

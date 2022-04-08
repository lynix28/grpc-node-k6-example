import grpc from 'k6/net/grpc';
import { getDataCases } from '../testcases/getData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');

export function invokeGetData(message) {
	client.connect('localhost:50051', {
		plaintext: true,
		timeout: '60s'
	});

	const params = {
		metadata: {}
	};
	const response = client.invoke(getDataCases.method, message, params);

	return response;
}
import grpc from 'k6/net/grpc';
import { BASE_URL } from '../../../env.js';
import { getAllDataCases } from '../testcases/getAllData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');
const url = `${BASE_URL}:50051`;

export function invokeGetAllData(message) {
	client.connect(url, {
		plaintext: true,
		timeout: '60s'
	});

	const params = {
		metadata: {}
	};
	const response = client.invoke(getAllDataCases.method, message, params);
	client.close();

	return response;
}
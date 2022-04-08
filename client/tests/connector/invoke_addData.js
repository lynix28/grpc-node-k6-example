import grpc from 'k6/net/grpc';
import { addDataCases } from '../testcases/addData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');

export function invokeAddData(message) {
	client.connect('localhost:50051', {
		plaintext: true,
		timeout: '60s'
	});

	const params = {
		metadata: {}
	};
	const response = client.invoke(addDataCases.method, message, params);
	client.close();

	return response;
}
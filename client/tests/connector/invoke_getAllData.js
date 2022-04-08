import grpc from 'k6/net/grpc';
import { getAllDataCases } from '../testcases/getAllData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');

export function invokeGetAllData(message) {
	client.connect('127.0.0.1:50051', {
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
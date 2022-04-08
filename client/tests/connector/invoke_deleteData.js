import grpc from 'k6/net/grpc';
import { BASE_URL } from '../../../env.js';
import { deleteDataCases } from '../testcases/deleteData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');
const url = `${BASE_URL}:50051`;

export function invokeDeleteData(message, list, listNumber) {
	client.connect(url, {
		plaintext: true,
		timeout: '60s'
	});

	let msg = message;
	msg.id = list.datas[listNumber].id;

	const params = {
		metadata: {}
	};
	const response = client.invoke(deleteDataCases.method, msg, params);
	client.close();

	return response;
}
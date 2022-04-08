import grpc from 'k6/net/grpc';
import { deleteDataCases } from '../testcases/deleteData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');

export function invokeDeleteData(message, list, listNumber) {
	client.connect('127.0.0.1:50051', {
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
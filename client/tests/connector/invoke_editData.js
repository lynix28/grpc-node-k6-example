import grpc from 'k6/net/grpc';
import { BASE_URL } from '../../../env.js';
import { editDataCases } from '../testcases/editData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');

export function invokeEditData(message, list) {
	client.connect(`${BASE_URL}:50051`, {
		plaintext: true,
		timeout: '60s'
	});

	let msg = message;
	msg.id = list.datas[0].id;

	const params = {
		metadata: {}
	};
	const response = client.invoke(editDataCases.method, msg, params);
	client.close();

	return response;
}
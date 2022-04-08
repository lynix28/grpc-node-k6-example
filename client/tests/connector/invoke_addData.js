/* eslint-disable no-undef */
import grpc from 'k6/net/grpc';
import { BASE_URL } from '../../../env.js';
import { addDataCases } from '../testcases/addData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');
let url;
if (BASE_URL == 'localhost') {
	url = `${BASE_URL}:50051`;
} else {
	url = `${__ENV.IPaddress}:50051`;
}

export function invokeAddData(message) {
	client.connect(url, {
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
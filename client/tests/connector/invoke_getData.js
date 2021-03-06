/* eslint-disable no-undef */
import grpc from 'k6/net/grpc';
import { BASE_URL } from '../../../env.js';
import { getDataCases } from '../testcases/getData_cases.js';

const client = new grpc.Client();
client.load(['../helpers'], 'testing.proto');
let url;
if (__ENV.IPaddress != '') {
	url = `${__ENV.IPaddress}:50051`;
} else {
	url = `${BASE_URL}:50051`;
}

export function invokeGetData(message) {
	client.connect(url, {
		plaintext: true,
		timeout: '60s'
	});

	const params = {
		metadata: {}
	};
	const response = client.invoke(getDataCases.method, message, params);

	return response;
}
import grpc from 'k6/net/grpc';
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import { getDataCases } from '../testcases/getData_cases.js';
import { invokeGetData } from '../connector/invoke_getData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function getData() {
	describe(`${getDataCases.description} | ${getDataCases.method}`, function() {
		describe(`${getDataCases.testcase.positive}`, function() {
			const result = invokeGetData(request.getData.positive);
			expect(result.status, 'gRPC Status').to.equal(grpc.StatusOK);
			expect(result.message.id, 'User ID').to.equal(response.getData.positive.id);
			expect(result.message.firstName, 'User First Name').to.equal(response.getData.positive.firstName);
		});
	});
}
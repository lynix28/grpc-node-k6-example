import grpc from 'k6/net/grpc';
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import { addDataCases } from '../testcases/addData_cases.js';
import { invokeAddData } from '../connector/invoke_addData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function addData() {
	describe(`${addDataCases.description} | ${addDataCases.method}`, function() {
		describe(`${addDataCases.testcase.positive}`, function() {
			const result = invokeAddData(request.addData.positive);
			expect(result.status, 'gRPC Status').to.equal(grpc.StatusOK);
			expect(result.message.firstName, 'User First Name').to.equal(response.addData.positive.firstName);
			expect(result.message.lastName, 'User Last Name').to.equal(response.addData.positive.lastName);
			expect(result.message.email, 'User Email Address').to.equal(response.addData.positive.email);
		});
	});
}
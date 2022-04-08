import grpc from 'k6/net/grpc';
import { describe } from '../../helpers/library/describe.js';
import { addDataCases } from '../testcases/addData_cases.js';
import { invokeAddData } from '../connector/invoke_addData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function addData() {
	describe(`${addDataCases.description} | ${addDataCases.method}`, function() {
		describe(`${addDataCases.testcase.positive}`, function(test) {
			const result = invokeAddData(request.addData.positive);
			test.expect(result.status).as('gRPC Status').toEqual(grpc.StatusOK);
			test.expect(result.message.firstName).as('User First Name').toEqual(response.addData.positive.firstName);
			test.expect(result.message.lastName).as('User Last Name').toEqual(response.addData.positive.lastName);
			test.expect(result.message.email).as('User Email Address').toEqual(response.addData.positive.email);
		});
	});
}
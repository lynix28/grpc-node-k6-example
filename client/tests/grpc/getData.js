import grpc from 'k6/net/grpc';
import { describe } from '../../helpers/library/describe.js';
import { getDataCases } from '../testcases/getData_cases.js';
import { invokeGetData } from '../connector/invoke_getData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function getData() {
	describe(`${getDataCases.description} | ${getDataCases.method}`, function() {
		describe(`${getDataCases.testcase.positive}`, function(test) {
			const result = invokeGetData(request.getData.positive);
			test.expect(result.status).as('gRPC Status').toEqual(grpc.StatusOK);
			test.expect(result.message.id).as('User ID').toEqual(response.getData.positive.id);
			test.expect(result.message.firstName).as('User First Name').toEqual(response.getData.positive.firstName);
		});
	});
}
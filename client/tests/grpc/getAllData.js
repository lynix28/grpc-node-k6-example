import grpc from 'k6/net/grpc';
import { describe } from '../../helpers/library/describe.js';
import { getAllDataCases } from '../testcases/getAllData_cases.js';
import { invokeGetAllData } from '../connector/invoke_getAllData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function getAllData() {
	describe(`${getAllDataCases.description} | ${getAllDataCases.method}`, function() {
		describe(`${getAllDataCases.testcase.positive}`, function(test) {
			const result = invokeGetAllData(request.getAllData.positive);
			test.expect(result.status).as('gRPC Status').toEqual(grpc.StatusOK);
			test.expect(result.message.datas.length).as('User Count').	toBeGreaterThan(response.getAllData.positive.count);
		});
	});
}
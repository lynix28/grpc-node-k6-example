import grpc from 'k6/net/grpc';
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import { getAllDataCases } from '../testcases/getAllData_cases.js';
import { invokeGetAllData } from '../connector/invoke_getAllData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function getAllData() {
	describe(`${getAllDataCases.description} | ${getAllDataCases.method}`, function() {
		describe(`${getAllDataCases.testcase.positive}`, function() {
			const result = invokeGetAllData(request.getAllData.positive);
			expect(result.status, 'gRPC Status').to.equal(grpc.StatusOK);
			expect(result.message.datas.length, 'User Count').	to.be.above(response.getAllData.positive.count);
		});
	});
}
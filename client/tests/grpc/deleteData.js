import grpc from 'k6/net/grpc';
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import { deleteDataCases } from '../testcases/deleteData_cases.js';
import { invokeGetAllData } from '../connector/invoke_getAllData.js';
import { invokeDeleteData } from '../connector/invoke_deleteData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function deleteData() {
	describe(`${deleteDataCases.description} | ${deleteDataCases.method}`, function() {
		describe(`${deleteDataCases.testcase.positive}`, function() {
			const list = invokeGetAllData(request.getAllData.positive);
			const result = invokeDeleteData(request.deleteData.positive, list.message, 2); // Array start from 0
			expect(result.status, 'gRPC Status').to.equal(grpc.StatusOK);
			expect(list.message.datas.length, 'User Count Greater Than').to.be.above(response.deleteData.positive.min);
			expect(list.message.datas.length, 'User Count Lower Than').to.be.below(response.deleteData.positive.max);
		});
	});
}
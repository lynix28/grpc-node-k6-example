import grpc from 'k6/net/grpc';
import { describe } from '../../helpers/library/describe.js';
import { deleteDataCases } from '../testcases/deleteData_cases.js';
import { invokeGetAllData } from '../connector/invoke_getAllData.js';
import { invokeDeleteData } from '../connector/invoke_deleteData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function deleteData() {
	describe(`${deleteDataCases.description} | ${deleteDataCases.method}`, function() {
		describe(`${deleteDataCases.testcase.positive}`, function(test) {
			const list = invokeGetAllData(request.getAllData.positive);
			const result = invokeDeleteData(request.deleteData.positive, list.message, 2); // Array start from 0
			test.expect(result.status).as('gRPC Status').toEqual(grpc.StatusOK);
			test.expect(list.message.datas.length).as('User Count Greter Than').toBeGreaterThan(response.deleteData.positive.min);
			test.expect(list.message.datas.length).as('User Count Lower Than').toBeLessThan(response.deleteData.positive.max);
		});
	});
}
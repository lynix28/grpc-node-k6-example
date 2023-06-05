import grpc from 'k6/net/grpc';
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import { editDataCases } from '../testcases/editData_cases.js';
import { invokeGetAllData } from '../connector/invoke_getAllData.js';
import { invokeEditData } from '../connector/invoke_editData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function editData() {
	describe(`${editDataCases.description} | ${editDataCases.method}`, function() {
		describe(`${editDataCases.testcase.positive}`, function() {
			const list = invokeGetAllData(request.getAllData.positive);
			const result = invokeEditData(request.editData.positive, list.message);
			expect(result.status, 'gRPC Status').to.equal(grpc.StatusOK);
			expect(result.message.firstName, `User ID: ${result.message.id} First Name`).to.equal(response.editData.positive.firstName);
			expect(result.message.lastName, `User ID: ${result.message.id} Last Name`).to.equal(response.editData.positive.lastName);
			expect(result.message.email, `User ID: ${result.message.id} Email`).to.equal(response.editData.positive.email);
		});
	});
}
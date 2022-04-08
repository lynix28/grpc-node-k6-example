import grpc from 'k6/net/grpc';
import { describe } from '../../helpers/library/describe.js';
import { editDataCases } from '../testcases/editData_cases.js';
import { invokeGetAllData } from '../connector/invoke_getAllData.js';
import { invokeEditData } from '../connector/invoke_editData.js';
import { request } from '../../helpers/request_body.js';
import { response } from '../../helpers/response_body.js';

export function editData() {
	describe(`${editDataCases.description} | ${editDataCases.method}`, function() {
		describe(`${editDataCases.testcase.positive}`, function(test) {
			const list = invokeGetAllData(request.getAllData.positive);
			const result = invokeEditData(request.editData.positive, list.message);
			test.expect(result.status).as('gRPC Status').toEqual(grpc.StatusOK);
			test.expect(result.message.firstName).as(`User ID: ${result.message.id} First Name`).toEqual(response.editData.positive.firstName);
			test.expect(result.message.lastName).as(`User ID: ${result.message.id} Last Name`).toEqual(response.editData.positive.lastName);
			test.expect(result.message.email).as(`User ID: ${result.message.id} Email`).toEqual(response.editData.positive.email);
		});
	});
}
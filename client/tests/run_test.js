import { getAllData } from './grpc/getAllData.js';
import { getData } from './grpc/getData.js';
import { addData } from './grpc/addData.js';
import { editData } from './grpc/editData.js';
import { deleteData } from './grpc/deleteData.js';

export default function() {
	getAllData();
	getData();
	addData();
	editData();
	deleteData();
}
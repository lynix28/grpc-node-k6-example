/* eslint-disable no-console */
const grpc = require('@grpc/grpc-js');
const PROTO_PATH = './testing.proto';
var protoLoader = require('@grpc/proto-loader');

const options = {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
};
var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const testProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
let datas = [
	{ id: '1', firstName: 'Putu', lastName: 'Ganteng', email: 'putu_ganteng@aloha.com' },
	{ id: '2', firstName: 'Made', lastName: 'Bagus', email: 'made_bagus@aloha.com' },
];

server.addService(testProto.TestService.service, {
	getAllData: (_, callback) => {
		callback(null, { datas: datas });
	},
	getData: (_, callback) => {
		const userId = _.request.id;
		const userItem = datas.find(({ id }) => userId == id);
		callback(null, userItem);
	},
	deleteData: (_, callback) => {
		const userId = _.request.id;
		datas = datas.filter(({ id }) => id !== userId);
		callback(null, {});
	},
	editData: (_, callback) => {
		const userId = _.request.id;
		const userItem = datas.find(({ id }) => userId == id);
		userItem.body = _.request.body;
		userItem.postImage = _.request.postImage;
		userItem.title = _.request.title;
		callback(null, userItem);
	},
	addData: (call, callback) => {
		let _news = { id: Date.now(), ...call.request };
		datas.push(_news);
		callback(null, _news);
	},
});

server.bindAsync(
	'127.0.0.1:50051',
	grpc.ServerCredentials.createInsecure(),
	(error, port) => {
		console.log('Server at port:', port);
		console.log('Server running at http://127.0.0.1:50051');
		server.start();
	}
);
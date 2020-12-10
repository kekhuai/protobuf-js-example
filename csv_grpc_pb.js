// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var csv_pb = require('./csv_pb.js');
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
var product_pb = require('./product_pb.js');
var uploaded_file_pb = require('./uploaded_file_pb.js');

function serialize_csv_Request(arg) {
  if (!(arg instanceof csv_pb.Request)) {
    throw new Error('Expected argument of type csv.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_csv_Request(buffer_arg) {
  return csv_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_uploadedfile_UploadedFile(arg) {
  if (!(arg instanceof uploaded_file_pb.UploadedFile)) {
    throw new Error('Expected argument of type uploadedfile.UploadedFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_uploadedfile_UploadedFile(buffer_arg) {
  return uploaded_file_pb.UploadedFile.deserializeBinary(new Uint8Array(buffer_arg));
}


var CsvServiceService = exports.CsvServiceService = {
  generate: {
    path: '/csv.CsvService/generate',
    requestStream: false,
    responseStream: false,
    requestType: csv_pb.Request,
    responseType: uploaded_file_pb.UploadedFile,
    requestSerialize: serialize_csv_Request,
    requestDeserialize: deserialize_csv_Request,
    responseSerialize: serialize_uploadedfile_UploadedFile,
    responseDeserialize: deserialize_uploadedfile_UploadedFile,
  },
};

exports.CsvServiceClient = grpc.makeGenericClientConstructor(CsvServiceService);

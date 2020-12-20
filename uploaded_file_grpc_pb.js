// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var uploaded_file_pb = require('./uploaded_file_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_uploadedfile_v1_CreateRequest(arg) {
  if (!(arg instanceof uploaded_file_pb.CreateRequest)) {
    throw new Error('Expected argument of type uploadedfile.v1.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_uploadedfile_v1_CreateRequest(buffer_arg) {
  return uploaded_file_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_uploadedfile_v1_QueryRequest(arg) {
  if (!(arg instanceof uploaded_file_pb.QueryRequest)) {
    throw new Error('Expected argument of type uploadedfile.v1.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_uploadedfile_v1_QueryRequest(buffer_arg) {
  return uploaded_file_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_uploadedfile_v1_Response(arg) {
  if (!(arg instanceof uploaded_file_pb.Response)) {
    throw new Error('Expected argument of type uploadedfile.v1.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_uploadedfile_v1_Response(buffer_arg) {
  return uploaded_file_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_uploadedfile_v1_UploadedFile(arg) {
  if (!(arg instanceof uploaded_file_pb.UploadedFile)) {
    throw new Error('Expected argument of type uploadedfile.v1.UploadedFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_uploadedfile_v1_UploadedFile(buffer_arg) {
  return uploaded_file_pb.UploadedFile.deserializeBinary(new Uint8Array(buffer_arg));
}


var UploadedFileServiceService = exports.UploadedFileServiceService = {
  create: {
    path: '/uploadedfile.v1.UploadedFileService/create',
    requestStream: false,
    responseStream: false,
    requestType: uploaded_file_pb.CreateRequest,
    responseType: uploaded_file_pb.UploadedFile,
    requestSerialize: serialize_uploadedfile_v1_CreateRequest,
    requestDeserialize: deserialize_uploadedfile_v1_CreateRequest,
    responseSerialize: serialize_uploadedfile_v1_UploadedFile,
    responseDeserialize: deserialize_uploadedfile_v1_UploadedFile,
  },
  readBy: {
    path: '/uploadedfile.v1.UploadedFileService/readBy',
    requestStream: false,
    responseStream: false,
    requestType: uploaded_file_pb.QueryRequest,
    responseType: uploaded_file_pb.Response,
    requestSerialize: serialize_uploadedfile_v1_QueryRequest,
    requestDeserialize: deserialize_uploadedfile_v1_QueryRequest,
    responseSerialize: serialize_uploadedfile_v1_Response,
    responseDeserialize: deserialize_uploadedfile_v1_Response,
  },
  readOne: {
    path: '/uploadedfile.v1.UploadedFileService/readOne',
    requestStream: false,
    responseStream: false,
    requestType: uploaded_file_pb.QueryRequest,
    responseType: uploaded_file_pb.UploadedFile,
    requestSerialize: serialize_uploadedfile_v1_QueryRequest,
    requestDeserialize: deserialize_uploadedfile_v1_QueryRequest,
    responseSerialize: serialize_uploadedfile_v1_UploadedFile,
    responseDeserialize: deserialize_uploadedfile_v1_UploadedFile,
  },
};

exports.UploadedFileServiceClient = grpc.makeGenericClientConstructor(UploadedFileServiceService);

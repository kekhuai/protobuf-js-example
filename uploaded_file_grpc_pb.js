// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var uploaded_file_pb = require('./uploaded_file_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_uploadedfile_v1_Request(arg) {
  if (!(arg instanceof uploaded_file_pb.Request)) {
    throw new Error('Expected argument of type uploadedfile.v1.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_uploadedfile_v1_Request(buffer_arg) {
  return uploaded_file_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: uploaded_file_pb.Request,
    responseType: uploaded_file_pb.UploadedFile,
    requestSerialize: serialize_uploadedfile_v1_Request,
    requestDeserialize: deserialize_uploadedfile_v1_Request,
    responseSerialize: serialize_uploadedfile_v1_UploadedFile,
    responseDeserialize: deserialize_uploadedfile_v1_UploadedFile,
  },
  readAll: {
    path: '/uploadedfile.v1.UploadedFileService/readAll',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: uploaded_file_pb.Response,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_uploadedfile_v1_Response,
    responseDeserialize: deserialize_uploadedfile_v1_Response,
  },
};

exports.UploadedFileServiceClient = grpc.makeGenericClientConstructor(UploadedFileServiceService);

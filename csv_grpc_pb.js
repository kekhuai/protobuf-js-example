// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var csv_pb = require('./csv_pb.js');
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var product_pb = require('./product_pb.js');

function serialize_csv_v1_Request(arg) {
  if (!(arg instanceof csv_pb.Request)) {
    throw new Error('Expected argument of type csv.v1.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_csv_v1_Request(buffer_arg) {
  return csv_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CsvServiceService = exports.CsvServiceService = {
  generate: {
    path: '/csv.v1.CsvService/generate',
    requestStream: false,
    responseStream: false,
    requestType: csv_pb.Request,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_csv_v1_Request,
    requestDeserialize: deserialize_csv_v1_Request,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CsvServiceClient = grpc.makeGenericClientConstructor(CsvServiceService);

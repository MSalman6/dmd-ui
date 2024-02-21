/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface IConnectivityTrackerHbbft extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IConnectivityTrackerHbbft;
  clone(): IConnectivityTrackerHbbft;
  methods: {
    checkReportMissingConnectivityCallable(
      caller: string,
      validator: string,
      blockNumber: number | string | BN,
      blockHash: string | number[]
    ): NonPayableTransactionObject<void>;

    checkReportReconnectCallable(
      caller: string,
      validator: string,
      blockNumber: number | string | BN,
      blockHash: string | number[]
    ): NonPayableTransactionObject<void>;

    isEarlyEpochEnd(
      epoch: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    reportMissingConnectivity(
      validator: string,
      blockNum: number | string | BN,
      blockHash: string | number[]
    ): NonPayableTransactionObject<void>;

    reportReconnect(
      validator: string,
      blockNumber: number | string | BN,
      blockHash: string | number[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
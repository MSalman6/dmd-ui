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

export interface IKeyGenHistory extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IKeyGenHistory;
  clone(): IKeyGenHistory;
  methods: {
    clearPrevKeyGenState(arg0: string[]): NonPayableTransactionObject<void>;

    getAcksLength(val: string): NonPayableTransactionObject<string>;

    getCurrentKeyGenRound(): NonPayableTransactionObject<string>;

    getNumberOfKeyFragmentsWritten(): NonPayableTransactionObject<{
      0: string;
      1: string;
    }>;

    getPart(val: string): NonPayableTransactionObject<string>;

    notifyKeyGenFailed(): NonPayableTransactionObject<void>;

    notifyNewEpoch(): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
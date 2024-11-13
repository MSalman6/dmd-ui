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

export type Initialized = ContractEventLog<{
  version: string;
  0: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type RemoveChangeableParameter = ContractEventLog<{
  funcSelector: string;
  0: string;
}>;
export type SetChangeableParameter = ContractEventLog<{
  setter: string;
  getter: string;
  params: string[];
  0: string;
  1: string;
  2: string[];
}>;

export interface ValueGuards extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ValueGuards;
  clone(): ValueGuards;
  methods: {
    allowedParameterRange(
      arg0: string | number[]
    ): NonPayableTransactionObject<string>;

    getAllowedParamsRange(
      _selector: string
    ): NonPayableTransactionObject<[string, string[]]>;

    getAllowedParamsRangeWithSelector(
      _selector: string | number[]
    ): NonPayableTransactionObject<[string, string[]]>;

    isWithinAllowedRange(
      funcSelector: string | number[],
      newVal: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    owner(): NonPayableTransactionObject<string>;

    removeAllowedChangeableParameter(
      funcSelector: string | number[]
    ): NonPayableTransactionObject<void>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    setAllowedChangeableParameter(
      setter: string | number[],
      getter: string | number[],
      params: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;
  };
  events: {
    Initialized(cb?: Callback<Initialized>): EventEmitter;
    Initialized(
      options?: EventOptions,
      cb?: Callback<Initialized>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    RemoveChangeableParameter(
      cb?: Callback<RemoveChangeableParameter>
    ): EventEmitter;
    RemoveChangeableParameter(
      options?: EventOptions,
      cb?: Callback<RemoveChangeableParameter>
    ): EventEmitter;

    SetChangeableParameter(cb?: Callback<SetChangeableParameter>): EventEmitter;
    SetChangeableParameter(
      options?: EventOptions,
      cb?: Callback<SetChangeableParameter>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Initialized", cb: Callback<Initialized>): void;
  once(
    event: "Initialized",
    options: EventOptions,
    cb: Callback<Initialized>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(
    event: "RemoveChangeableParameter",
    cb: Callback<RemoveChangeableParameter>
  ): void;
  once(
    event: "RemoveChangeableParameter",
    options: EventOptions,
    cb: Callback<RemoveChangeableParameter>
  ): void;

  once(
    event: "SetChangeableParameter",
    cb: Callback<SetChangeableParameter>
  ): void;
  once(
    event: "SetChangeableParameter",
    options: EventOptions,
    cb: Callback<SetChangeableParameter>
  ): void;
}

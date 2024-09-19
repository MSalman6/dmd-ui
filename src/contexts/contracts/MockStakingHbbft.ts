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

export type RemoveChangeAbleParameter = ContractEventLog<{
  funcSelector: string;
  0: string;
}>;
export type SetChangeAbleParameter = ContractEventLog<{
  setter: string;
  getter: string;
  params: string[];
  0: string;
  1: string;
  2: string[];
}>;
export type SetDelegatorMinStake = ContractEventLog<{
  minStake: string;
  0: string;
}>;

export interface MockStakingHbbft extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MockStakingHbbft;
  clone(): MockStakingHbbft;
  methods: {
    allowedParameterRange(
      arg0: string | number[]
    ): NonPayableTransactionObject<string>;

    delegatorMinStake(): NonPayableTransactionObject<string>;

    getAllowedParamsRangeWithSelector(
      _selector: string | number[]
    ): NonPayableTransactionObject<[string, string[]]>;

    isWithinAllowedRange(
      funcSelector: string | number[],
      newVal: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    removeAllowedChangeableParameter(
      funcSelector: string
    ): NonPayableTransactionObject<void>;

    setAllowedChangeableParameter(
      setter: string,
      getter: string,
      params: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    setDelegatorMinStake(
      _minStake: number | string | BN
    ): NonPayableTransactionObject<void>;

    setStake(
      staking: string,
      stakeAmount: number | string | BN
    ): NonPayableTransactionObject<void>;

    stakeAmountTotal(staking: string): NonPayableTransactionObject<string>;

    totalStakedAmount(): NonPayableTransactionObject<string>;
  };
  events: {
    RemoveChangeAbleParameter(
      cb?: Callback<RemoveChangeAbleParameter>
    ): EventEmitter;
    RemoveChangeAbleParameter(
      options?: EventOptions,
      cb?: Callback<RemoveChangeAbleParameter>
    ): EventEmitter;

    SetChangeAbleParameter(cb?: Callback<SetChangeAbleParameter>): EventEmitter;
    SetChangeAbleParameter(
      options?: EventOptions,
      cb?: Callback<SetChangeAbleParameter>
    ): EventEmitter;

    SetDelegatorMinStake(cb?: Callback<SetDelegatorMinStake>): EventEmitter;
    SetDelegatorMinStake(
      options?: EventOptions,
      cb?: Callback<SetDelegatorMinStake>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "RemoveChangeAbleParameter",
    cb: Callback<RemoveChangeAbleParameter>
  ): void;
  once(
    event: "RemoveChangeAbleParameter",
    options: EventOptions,
    cb: Callback<RemoveChangeAbleParameter>
  ): void;

  once(
    event: "SetChangeAbleParameter",
    cb: Callback<SetChangeAbleParameter>
  ): void;
  once(
    event: "SetChangeAbleParameter",
    options: EventOptions,
    cb: Callback<SetChangeAbleParameter>
  ): void;

  once(event: "SetDelegatorMinStake", cb: Callback<SetDelegatorMinStake>): void;
  once(
    event: "SetDelegatorMinStake",
    options: EventOptions,
    cb: Callback<SetDelegatorMinStake>
  ): void;
}
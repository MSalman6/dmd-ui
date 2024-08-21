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
export type SetConnectivityTrackerContract = ContractEventLog<{
  _connectivityTracker: string;
  0: string;
}>;
export type SetStakingContract = ContractEventLog<{
  _staking: string;
  0: string;
}>;
export type SetValidatorSetContract = ContractEventLog<{
  _validatorSet: string;
  0: string;
}>;
export type UpdateScoringFactor = ContractEventLog<{
  factor: string;
  value: string;
  0: string;
  1: string;
}>;
export type ValidatorScoreChanged = ContractEventLog<{
  miningAddress: string;
  factor: string;
  newScore: string;
  0: string;
  1: string;
  2: string;
}>;

export interface BonusScoreSystem extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): BonusScoreSystem;
  clone(): BonusScoreSystem;
  methods: {
    DEFAULT_BAD_PERF_FACTOR(): NonPayableTransactionObject<string>;

    DEFAULT_NO_KEY_WRITE_FACTOR(): NonPayableTransactionObject<string>;

    DEFAULT_NO_STAND_BY_FACTOR(): NonPayableTransactionObject<string>;

    DEFAULT_STAND_BY_FACTOR(): NonPayableTransactionObject<string>;

    MAX_SCORE(): NonPayableTransactionObject<string>;

    MIN_SCORE(): NonPayableTransactionObject<string>;

    connectivityTracker(): NonPayableTransactionObject<string>;

    getScoringFactorValue(
      factor: number | string | BN
    ): NonPayableTransactionObject<string>;

    getTimePerScorePoint(
      factor: number | string | BN
    ): NonPayableTransactionObject<string>;

    getValidatorScore(mining: string): NonPayableTransactionObject<string>;

    initialize(
      _owner: string,
      _validatorSetHbbft: string,
      _connectivityTracker: string,
      _stakingHbbft: string
    ): NonPayableTransactionObject<void>;

    owner(): NonPayableTransactionObject<string>;

    penaliseBadPerformance(
      mining: string,
      time: number | string | BN
    ): NonPayableTransactionObject<void>;

    penaliseNoKeyWrite(mining: string): NonPayableTransactionObject<void>;

    penaliseNoStandBy(
      mining: string,
      unavailableSince: number | string | BN
    ): NonPayableTransactionObject<void>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    rewardStandBy(
      mining: string,
      availableSince: number | string | BN
    ): NonPayableTransactionObject<void>;

    setConnectivityTrackerContract(
      _address: string
    ): NonPayableTransactionObject<void>;

    setStakingContract(_staking: string): NonPayableTransactionObject<void>;

    setValidatorSetContract(
      _validatorSet: string
    ): NonPayableTransactionObject<void>;

    stakingHbbft(): NonPayableTransactionObject<string>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    updateScoringFactor(
      factor: number | string | BN,
      value: number | string | BN
    ): NonPayableTransactionObject<void>;

    validatorSetHbbft(): NonPayableTransactionObject<string>;
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

    SetConnectivityTrackerContract(
      cb?: Callback<SetConnectivityTrackerContract>
    ): EventEmitter;
    SetConnectivityTrackerContract(
      options?: EventOptions,
      cb?: Callback<SetConnectivityTrackerContract>
    ): EventEmitter;

    SetStakingContract(cb?: Callback<SetStakingContract>): EventEmitter;
    SetStakingContract(
      options?: EventOptions,
      cb?: Callback<SetStakingContract>
    ): EventEmitter;

    SetValidatorSetContract(
      cb?: Callback<SetValidatorSetContract>
    ): EventEmitter;
    SetValidatorSetContract(
      options?: EventOptions,
      cb?: Callback<SetValidatorSetContract>
    ): EventEmitter;

    UpdateScoringFactor(cb?: Callback<UpdateScoringFactor>): EventEmitter;
    UpdateScoringFactor(
      options?: EventOptions,
      cb?: Callback<UpdateScoringFactor>
    ): EventEmitter;

    ValidatorScoreChanged(cb?: Callback<ValidatorScoreChanged>): EventEmitter;
    ValidatorScoreChanged(
      options?: EventOptions,
      cb?: Callback<ValidatorScoreChanged>
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
    event: "SetConnectivityTrackerContract",
    cb: Callback<SetConnectivityTrackerContract>
  ): void;
  once(
    event: "SetConnectivityTrackerContract",
    options: EventOptions,
    cb: Callback<SetConnectivityTrackerContract>
  ): void;

  once(event: "SetStakingContract", cb: Callback<SetStakingContract>): void;
  once(
    event: "SetStakingContract",
    options: EventOptions,
    cb: Callback<SetStakingContract>
  ): void;

  once(
    event: "SetValidatorSetContract",
    cb: Callback<SetValidatorSetContract>
  ): void;
  once(
    event: "SetValidatorSetContract",
    options: EventOptions,
    cb: Callback<SetValidatorSetContract>
  ): void;

  once(event: "UpdateScoringFactor", cb: Callback<UpdateScoringFactor>): void;
  once(
    event: "UpdateScoringFactor",
    options: EventOptions,
    cb: Callback<UpdateScoringFactor>
  ): void;

  once(
    event: "ValidatorScoreChanged",
    cb: Callback<ValidatorScoreChanged>
  ): void;
  once(
    event: "ValidatorScoreChanged",
    options: EventOptions,
    cb: Callback<ValidatorScoreChanged>
  ): void;
}
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
export type ProposalCanceled = ContractEventLog<{
  proposer: string;
  proposalId: string;
  reason: string;
  0: string;
  1: string;
  2: string;
}>;
export type ProposalCreated = ContractEventLog<{
  proposer: string;
  proposalId: string;
  targets: string[];
  values: string[];
  calldatas: string[];
  description: string;
  0: string;
  1: string;
  2: string[];
  3: string[];
  4: string[];
  5: string;
}>;
export type ProposalExecuted = ContractEventLog<{
  caller: string;
  proposalId: string;
  0: string;
  1: string;
}>;
export type SetCreateProposalFee = ContractEventLog<{
  fee: string;
  0: string;
}>;
export type SubmitVote = ContractEventLog<{
  voter: string;
  proposalId: string;
  vote: string;
  0: string;
  1: string;
  2: string;
}>;
export type SubmitVoteWithReason = ContractEventLog<{
  voter: string;
  proposalId: string;
  vote: string;
  reason: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type SwitchDaoPhase = ContractEventLog<{
  phase: string;
  start: string;
  end: string;
  0: string;
  1: string;
  2: string;
}>;
export type VotingFinalized = ContractEventLog<{
  caller: string;
  proposalId: string;
  accepted: boolean;
  0: string;
  1: string;
  2: boolean;
}>;

export interface DiamondDao extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): DiamondDao;
  clone(): DiamondDao;
  methods: {
    DAO_PHASE_DURATION(): NonPayableTransactionObject<string>;

    MAX_NEW_PROPOSALS(): NonPayableTransactionObject<string>;

    cancel(
      proposalId: number | string | BN,
      reason: string
    ): NonPayableTransactionObject<void>;

    countVotes(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<
      [string, string, string, string, string, string]
    >;

    createProposalFee(): NonPayableTransactionObject<string>;

    currentPhaseProposals(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    daoEpochStakeSnapshot(
      arg0: number | string | BN,
      arg1: string
    ): NonPayableTransactionObject<string>;

    daoPhase(): NonPayableTransactionObject<{
      start: string;
      end: string;
      daoEpoch: string;
      phase: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    execute(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<void>;

    finalize(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<void>;

    getCurrentPhaseProposals(): NonPayableTransactionObject<string[]>;

    getProposal(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<
      [string, string, string, string[], string[], string[], string]
    >;

    getProposalVoters(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    getProposalVotersCount(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<string>;

    governancePot(): NonPayableTransactionObject<string>;

    hashProposal(
      targets: string[],
      values: (number | string | BN)[],
      calldatas: (string | number[])[],
      description: string
    ): NonPayableTransactionObject<string>;

    initialize(
      _validatorSet: string,
      _stakingHbbft: string,
      _reinsertPot: string,
      _createProposalFee: number | string | BN,
      _startTimestamp: number | string | BN
    ): NonPayableTransactionObject<void>;

    proposalExists(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    proposals(arg0: number | string | BN): NonPayableTransactionObject<{
      proposer: string;
      votingDaoEpoch: string;
      state: string;
      description: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    propose(
      targets: string[],
      values: (number | string | BN)[],
      calldatas: (string | number[])[],
      description: string
    ): PayableTransactionObject<void>;

    quorumReached(
      result: [
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): NonPayableTransactionObject<boolean>;

    reinsertPot(): NonPayableTransactionObject<string>;

    results(arg0: number | string | BN): NonPayableTransactionObject<{
      countAbstain: string;
      countYes: string;
      countNo: string;
      stakeAbstain: string;
      stakeYes: string;
      stakeNo: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    setCreateProposalFee(
      _fee: number | string | BN
    ): NonPayableTransactionObject<void>;

    stakingHbbft(): NonPayableTransactionObject<string>;

    statistic(): NonPayableTransactionObject<{
      total: string;
      accepted: string;
      declined: string;
      canceled: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    switchPhase(): NonPayableTransactionObject<void>;

    validatorSet(): NonPayableTransactionObject<string>;

    vote(
      proposalId: number | string | BN,
      _vote: number | string | BN
    ): NonPayableTransactionObject<void>;

    voteWithReason(
      proposalId: number | string | BN,
      _vote: number | string | BN,
      reason: string
    ): NonPayableTransactionObject<void>;

    votes(
      arg0: number | string | BN,
      arg1: string
    ): NonPayableTransactionObject<{
      timestamp: string;
      vote: string;
      reason: string;
      0: string;
      1: string;
      2: string;
    }>;
  };
  events: {
    Initialized(cb?: Callback<Initialized>): EventEmitter;
    Initialized(
      options?: EventOptions,
      cb?: Callback<Initialized>
    ): EventEmitter;

    ProposalCanceled(cb?: Callback<ProposalCanceled>): EventEmitter;
    ProposalCanceled(
      options?: EventOptions,
      cb?: Callback<ProposalCanceled>
    ): EventEmitter;

    ProposalCreated(cb?: Callback<ProposalCreated>): EventEmitter;
    ProposalCreated(
      options?: EventOptions,
      cb?: Callback<ProposalCreated>
    ): EventEmitter;

    ProposalExecuted(cb?: Callback<ProposalExecuted>): EventEmitter;
    ProposalExecuted(
      options?: EventOptions,
      cb?: Callback<ProposalExecuted>
    ): EventEmitter;

    SetCreateProposalFee(cb?: Callback<SetCreateProposalFee>): EventEmitter;
    SetCreateProposalFee(
      options?: EventOptions,
      cb?: Callback<SetCreateProposalFee>
    ): EventEmitter;

    SubmitVote(cb?: Callback<SubmitVote>): EventEmitter;
    SubmitVote(options?: EventOptions, cb?: Callback<SubmitVote>): EventEmitter;

    SubmitVoteWithReason(cb?: Callback<SubmitVoteWithReason>): EventEmitter;
    SubmitVoteWithReason(
      options?: EventOptions,
      cb?: Callback<SubmitVoteWithReason>
    ): EventEmitter;

    SwitchDaoPhase(cb?: Callback<SwitchDaoPhase>): EventEmitter;
    SwitchDaoPhase(
      options?: EventOptions,
      cb?: Callback<SwitchDaoPhase>
    ): EventEmitter;

    VotingFinalized(cb?: Callback<VotingFinalized>): EventEmitter;
    VotingFinalized(
      options?: EventOptions,
      cb?: Callback<VotingFinalized>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Initialized", cb: Callback<Initialized>): void;
  once(
    event: "Initialized",
    options: EventOptions,
    cb: Callback<Initialized>
  ): void;

  once(event: "ProposalCanceled", cb: Callback<ProposalCanceled>): void;
  once(
    event: "ProposalCanceled",
    options: EventOptions,
    cb: Callback<ProposalCanceled>
  ): void;

  once(event: "ProposalCreated", cb: Callback<ProposalCreated>): void;
  once(
    event: "ProposalCreated",
    options: EventOptions,
    cb: Callback<ProposalCreated>
  ): void;

  once(event: "ProposalExecuted", cb: Callback<ProposalExecuted>): void;
  once(
    event: "ProposalExecuted",
    options: EventOptions,
    cb: Callback<ProposalExecuted>
  ): void;

  once(event: "SetCreateProposalFee", cb: Callback<SetCreateProposalFee>): void;
  once(
    event: "SetCreateProposalFee",
    options: EventOptions,
    cb: Callback<SetCreateProposalFee>
  ): void;

  once(event: "SubmitVote", cb: Callback<SubmitVote>): void;
  once(
    event: "SubmitVote",
    options: EventOptions,
    cb: Callback<SubmitVote>
  ): void;

  once(event: "SubmitVoteWithReason", cb: Callback<SubmitVoteWithReason>): void;
  once(
    event: "SubmitVoteWithReason",
    options: EventOptions,
    cb: Callback<SubmitVoteWithReason>
  ): void;

  once(event: "SwitchDaoPhase", cb: Callback<SwitchDaoPhase>): void;
  once(
    event: "SwitchDaoPhase",
    options: EventOptions,
    cb: Callback<SwitchDaoPhase>
  ): void;

  once(event: "VotingFinalized", cb: Callback<VotingFinalized>): void;
  once(
    event: "VotingFinalized",
    options: EventOptions,
    cb: Callback<VotingFinalized>
  ): void;
}
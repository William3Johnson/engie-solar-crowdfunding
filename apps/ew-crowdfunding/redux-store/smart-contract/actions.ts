/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers';
import { AppThunk } from '../store';
import { SmartContractActionTypes } from './types';

export const setAccountBalance = (accountBalance: string) => ({
  type: SmartContractActionTypes.SET_ACCOUNT_BALANCE,
  payload: accountBalance,
});

export const setTokenLimit = (tokenLimit: string) => ({
  type: SmartContractActionTypes.SET_TOKEN_LIMIT,
  payload: tokenLimit,
});

export const setContribution = () => ({
  type: SmartContractActionTypes.SET_CONTRIBUTION,
});

export const lend =
  (amount: number): AppThunk =>
  async (dispatch): Promise<void> => {
    console.log('Lending amount: ', amount);
  };

export const redeemSlt =
  (amount: number): AppThunk =>
  async (dispatch): Promise<void> => {
    console.log('Redeeming amount: ', amount);
  };

export const getAccountBalance =
  (provider: any, currentAddress: string): AppThunk =>
  async (dispatch): Promise<void> => {
    let formattedAccountBalance = '0';
    const currentBalance = await provider.getBalance(currentAddress);
    const accountBalance = ethers.utils.formatEther(currentBalance);
    formattedAccountBalance = `${Number(accountBalance).toPrecision(3)}`;
    dispatch({
      type: SmartContractActionTypes.SET_ACCOUNT_BALANCE,
      payload: formattedAccountBalance,
    });
  };

export const getTokenLimit =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    const tokenLimit = Number(process.env.NEXT_PUBLIC_TOKEN_LIMIT);
    dispatch({
      type: SmartContractActionTypes.SET_TOKEN_LIMIT,
      payload: tokenLimit,
    });
  };

export const getGlobalTokenLimit =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    const globalTokenLimit = Number(process.env.NEXT_PUBLIC_GLOBAL_TOKEN_LIMIT);
    dispatch({
      type: SmartContractActionTypes.SET_GLOBAL_TOKEN_LIMIT,
      payload: globalTokenLimit,
    });
  };

export const getUserContribution =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    // This will be taken from the smart contract
    const userContribution = 100;
    dispatch({
      type: SmartContractActionTypes.SET_CONTRIBUTION,
      payload: userContribution,
    });
  };

export const getSolarLoanTokenBalance =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    // This will be taken from the smart contract
    const solarLoanTokenBalance = 400;
    dispatch({
      type: SmartContractActionTypes.SET_SOLAR_LOANS_TOKEN_BALANCE,
      payload: solarLoanTokenBalance,
    });
  };

export const getRedeemableReward =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    // This will be taken from the smart contract
    const redeemableReward = 50;
    dispatch({
      type: SmartContractActionTypes.SET_REDEEMABLE_REWARD,
      payload: redeemableReward,
    });
  };

export const getTokensRedeemed =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    // This will be taken from the smart contract
    const tokensRedeemed = 137;
    dispatch({
      type: SmartContractActionTypes.SET_TOKENS_REDEEMED,
      payload: tokensRedeemed,
    });
  };

export const getInterestRate =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    const interestRate = process.env.NEXT_PUBLIC_INTEREST_RATE;
    dispatch({
      type: SmartContractActionTypes.SET_INTEREST_RATE,
      payload: interestRate,
    });
  };

export const getContributionDeadline =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    const contributionDeadline = process.env.NEXT_PUBLIC_CONTRIBUTION_DEADLINE;
    dispatch({
      type: SmartContractActionTypes.SET_CONTRIBUTION_DEADLINE,
      payload: contributionDeadline,
    });
  };

export const getSolarLoansDistributed =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    const solarLoansDistributed = process.env.NEXT_PUBLIC_SOLAR_LOANS_DISTRIBUTED;
    dispatch({
      type: SmartContractActionTypes.SET_SOLAR_LOANS_DISTRIBUTED,
      payload: solarLoansDistributed,
    });
  };

export const getSolarLoansMature =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    const solarLoansMature = process.env.NEXT_PUBLIC_SOLAR_LOANS_MATURE;
    dispatch({
      type: SmartContractActionTypes.SET_SOLAR_LOANS_MATURE,
      payload: solarLoansMature,
    });
  };

export const getTotalLentAmount =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    // This will be taken from the smart contract
    const totalLentAmount = 5740;
    dispatch({
      type: SmartContractActionTypes.SET_TOTAL_LENT_AMOUNT,
      payload: totalLentAmount,
    });
  };

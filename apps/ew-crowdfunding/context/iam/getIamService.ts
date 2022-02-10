import { setChainConfig, setCacheConfig, Claim, ProviderType } from 'iam-client-lib';
import { RoleEnrollmentStatus } from '../../redux-store';
import { getSignerService } from './getSignerService';

export const getIamService = async (providerType: ProviderType) => {
  // // Set Cache Server
  setCacheConfig(+process.env.NEXT_PUBLIC_CHAIN_ID || 73799, {
    url: process.env.NEXT_PUBLIC_CACHE_SERVER,
  });
  // Set RPC
  setChainConfig(+process.env.NEXT_PUBLIC_CHAIN_ID || 73799, {
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
  });

  const getEnrollmentStatus = (enrollments: Claim[]) => {
    if (enrollments.length === 0) {
      return RoleEnrollmentStatus.NOT_ENROLLED;
    }
    const role = enrollments?.find((item) => item.isAccepted);
    if (role) {
      return RoleEnrollmentStatus.ENROLLED_APPROVED;
    }
    return RoleEnrollmentStatus.ENROLLED_NOT_APPROVED;
  };

  try {
    if (!window?.ethereum) {
      return;
    }
    const { signerService, connectToCacheServer } = await getSignerService(providerType);
    const { connectToDidRegistry, cacheClient } = await connectToCacheServer();
    const { claimsService } = await connectToDidRegistry();
    const claims: Claim[] = await cacheClient.getClaimsByRequester(signerService?.did, {
      namespace: process.env.NEXT_PUBLIC_PATRON_ROLE.split('.roles.').pop(),
    });
    const role = claims.find((item) => item.isAccepted);

    const roleEnrolmentStatus = getEnrollmentStatus(claims);

    return {
      signerService,
      cacheClient,
      claims,
      roleEnrolmentStatus,
      claimsService,
      role,
    };
  } catch (error) {
    // throw new Error('No ethereum object');
    console.log('No ethereum object! Please connect your wallet!');
    return;
  }
};

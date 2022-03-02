import React, { useState, useEffect } from 'react';

import {ApiType, StateMutabilityType} from '../config/constants/ApiType';
import ContractView from '../interface/ContractView'
import ContractAbi from '../abis/ERC721EXT.json'

const useApis = () => {
  const [apis, setApis] = useState<ContractView[]>([]);
  useEffect(() => {
      const filtered_apis = ContractAbi.filter((api) => {
        return api.type === ApiType.Function && api.stateMutability === StateMutabilityType.View
      })
      setApis(filtered_apis);
  }, []);

  return apis;
}

export default useApis
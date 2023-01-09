import { useEffect, useState } from 'react';
import { fetchData, JSONDataResponse } from '../../instance/instance';

interface UseAsyncDataReturnValues {
	photosDataIsLoading: boolean;
	responseError: Error | undefined;
	photosData: Array<JSONDataResponse>;
}

export const useAsyncData = ():UseAsyncDataReturnValues => {
  const [ photosDataIsLoading, setPhotosDataIsLoading ] = useState<boolean>(true)
  const [ photosData, setPhotosData ] = useState<Array<JSONDataResponse> | []>([])
  const [ responseError, setResponseError ] = useState<Error | undefined>(undefined)

  useEffect(() => {
    fetchData()
      .then((res: Array<JSONDataResponse>) => { 
        setPhotosData(res)
        setPhotosDataIsLoading(false)
      })
      .catch((err: Error | any) => { 
        setResponseError(err)
        setPhotosDataIsLoading(false)
      })
  }, [])
	return { photosDataIsLoading, responseError, photosData }
}
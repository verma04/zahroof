
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  
  HOMEPAGE,
  ENTERPRISESOLUSOLUSTIONS

 
 
} from '../queries'



export const useEnterpriseSolutions = () => useQuery(ENTERPRISESOLUSOLUSTIONS);



export const useGetHomePage = () => useQuery(HOMEPAGE);

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  
  HOMEPAGE,
  ENTERPRISESOLUSOLUSTIONS,
  CONTACTUS

 
 
} from '../queries'



export const useEnterpriseSolutions = () => useQuery(ENTERPRISESOLUSOLUSTIONS);



export const useGetHomePage = () => useQuery(HOMEPAGE);

export const useGetContactPage = () => useQuery(CONTACTUS);
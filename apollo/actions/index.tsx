
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  
  HOMEPAGE,
  ENTERPRISESOLUSOLUSTIONS,
  CONTACTUS,
  ESG,
  ABOUTUS

 
 
} from '../queries'



export const useEnterpriseSolutions = () => useQuery(ENTERPRISESOLUSOLUSTIONS);



export const useGetHomePage = () => useQuery(HOMEPAGE);

export const useGetContactPage = () => useQuery(CONTACTUS);

export const useGetEsg = () => useQuery(ESG);

export const useGetAboutus = () => useQuery(ABOUTUS);
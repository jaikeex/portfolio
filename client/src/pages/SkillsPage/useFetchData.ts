import { useSanityData } from 'hooks/useSanityData';
import type { Skill, Work } from 'types';

interface IUseFetchData {
  skills: Skill[];
  experiences: Work[];
  error: unknown;
  isFetching: boolean;
}

export const useFetchData = (): IUseFetchData => {
  const { data: skillsData, error: skillsErr, isFetching: isFetchingSkills } = useSanityData('skills');
  const { data: expData, error: expErr, isFetching: isFetchingExp } = useSanityData('experiences');

  return {
    skills: skillsData,
    experiences: expData,
    error: skillsErr || expErr,
    isFetching: isFetchingSkills || isFetchingExp
  };
};

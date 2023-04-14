import { useSanityData } from 'hooks/useSanityData';
import type { SkillData, WorkData } from 'types';

interface IUseFetchData {
  skills?: SkillData[];
  experiences?: WorkData[];
  error: unknown;
  isFetching: boolean;
}

export const useFetchData = (): IUseFetchData => {
  const { data: skillsData, error: skillsErr, isFetching: isFetchingSkills } = useSanityData<SkillData[]>('skills');
  const { data: expData, error: expErr, isFetching: isFetchingExp } = useSanityData<WorkData[]>('experiences');

  return {
    skills: skillsData,
    experiences: expData,
    error: skillsErr || expErr,
    isFetching: isFetchingSkills || isFetchingExp
  };
};

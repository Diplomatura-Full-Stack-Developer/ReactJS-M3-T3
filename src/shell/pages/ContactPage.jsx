import { BranchesCard } from './ui/BranchesCard';
import { branches } from '../../data/branches';  


export const ContactPage = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
      {branches.map((branch) => (
        <BranchesCard
          key={branch.province}
          branch={branch}
        />
      ))}
    </div>
  );
};


import { Link } from 'react-router-dom';
import { BsBoxArrowRight  } from 'react-icons/bs';

const LogoutButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        <BsBoxArrowRight className='text-2xl' />
      </Link>
    </div>
  );
};

export default LogoutButton;

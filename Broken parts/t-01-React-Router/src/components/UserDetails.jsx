import { useParams } from 'react-router-dom';

const UserDetails = () => {
  console.log(useParams());
  const { userId } = useParams();

  return (
    <div>
      <h1>User Details {userId}</h1>
    </div>
  );
};
export default UserDetails;

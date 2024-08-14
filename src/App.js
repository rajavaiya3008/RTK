
import './App.css';
import { useGetPostQuery, useGetUserQuery } from './redux/slices/api';

function App() {
  const {data:userData,isLoading:userLoading,error,isError:userError} = useGetUserQuery()
  const {data:postData,isLoading:postLoading,isError:postError} = useGetPostQuery()
  return (
    <div className="">
      {
        userError ? <span>Something Went Wrong</span> :
        userLoading ? <span>Loading...</span> :
          userData.map((user) => <p key={user.id}>{user.name}</p>)
      }
      {
        postError ? <span>Something Went Wrong</span> :
        postLoading ? <span>Loading...</span> :
            <p>{postData.title}</p>
      }
    </div>
  );
}

export default App;

import './App.css';
import { useAddPostMutation, useGetPostQuery, useGetUserQuery } from './redux/slices/api';
// import jwt from 'jsonwebtoken'

// const token = jwt.sign({name:'hello'},'secreteKey',{expiresIn:'1m'})
//   console.log('token', token)

function App() {
  // const btoa = window.btoa('hello world')
  // console.log('btoa', btoa)
  // const atob = window.atob(btoa)
  // console.log('atob', atob)
  const {data:userData,isLoading:userLoading,isError:userError} = useGetUserQuery()
  const {data:postData,isLoading:postLoading,isError:postError,error} = useGetPostQuery(
    userData ? {} : undefined,
    {
      skip:!userData
    }
  )
  const [addPost] = useAddPostMutation()
  console.log('error', error)

  return (
    <div className="">
      {
        userError ? <span>Something Went Wrong</span> :
        userLoading ? <span>Loading...</span> :
          userData.map((user,i) => <p key={user.id}>User:{i} {user.name}</p>)
      }
      {
        postError ? <span>Something Went Wrong</span> :
        postLoading ? <span>Loading...</span> :
            postData?.map((post,i) => <p>Post:{i} {post.title}</p>)
      }
      <button onClick={() => {addPost({
        userId:1,
        id:1,
        title:"hello",
        body:"detail of post"
      })}}>Add Post</button>
    </div>
  );
}

export default App;

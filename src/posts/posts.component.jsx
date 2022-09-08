import { useQuery,useMutation } from "@tanstack/react-query";
import postsPresenter from "./posts.presenter";

function PostsComponent() {  

  const handleClick = () => {
    mutation.mutate({        
        title: 'First attempt'
    });    
  };

  const mutation = useMutation(async (newPost) => {
    await postsPresenter.createPost(newPost);
    refetch();
  })

  const {
    isLoading,
    error,
    refetch,
    data: posts,
  } = useQuery(["posts"], async () => {
    const data = await postsPresenter.fetchPosts();
    return data;
  });

  if (isLoading) {
    return "Loading...";
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      This is post component!
      <ul>
        {posts &&
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
      </ul>
      <button onClick={handleClick}>AddPost</button>
      <button onClick={() => refetch()}>Fetch Todos</button>
    </>
  );
}

export default PostsComponent;

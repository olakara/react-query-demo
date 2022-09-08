import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import PostsComponent from "./posts/posts.component";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <PostsComponent></PostsComponent>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

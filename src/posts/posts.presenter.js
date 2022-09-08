import postsRepository from './posts.repository';
class PostsPresenter {
    constructor() {
        console.log('Inside the presenter constructor!');
    }
    fetchPosts = async () => {
        console.log('Inside the fetch posts method');
        const response = await postsRepository.fetchPosts();
        const vm = response.map(item => {
            return {
                id: item.id,
                title: item.title
            }
        })
        return vm;
    }

    createPost = async(postVm) => {
        const postPm = {           
            title: postVm.title,
            author: 'Abdel Raoof'
        }
        const response = await postsRepository.createPost(postPm);
        return response;
    }
}

const postsPresenter = new PostsPresenter();
export default postsPresenter;

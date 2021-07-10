import Post from '../../../models/Post'
import User from '../../../models/User'

export default{
    Post:{
author: (post) => User.findByPk(post.author),
    },
    Query:{
       posts: () => Post.findAll(),
        post: (_, {id }) => Post.findByPk(id),
    },
    Mutation:{
        createPost: (_, {data}) => Post.create(data),
        updatePost: (_, {id, data}) => Post.update(id, data, {new: true}),
        deletePost: async (_, {id}) => !!(await Post.destroy(id)),
    },
};
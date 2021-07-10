import User from '../../../models/User'

export default{
    Query:{
        users: () => User.findAll(),
        user: (_, {id }) => User.findByPk(id),
    },
    Mutation:{
        createUser: (_, {data}) => User.create(data),
        updateUser: (_, {id, data}) => User.update(data, {where: {id: id}}),
        deleteUser: async (_, {id}) => !!(await User.destroy( {where: {id: id}})),
    },
};
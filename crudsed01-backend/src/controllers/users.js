import User from '../models/Users';

export const getAllUsers = async(req, res) => {
    try{
        const users = await User.find({}, {}, { sort: '-createdAt' });
        res.json({
            status: 'success',
            data: activities,
            message: 'User fetched succesfully',
        });
    } catch(error){
    console.error(error);
    res.json({
      status: 'error',
      data: null,
      message: error,
    });
    }
}

export const createUser = (req,res) => {
    try {
        const user = new User({ 
            username: req.body.username,
            roles: req.body.roles
        });
        user.save();
        res.json({
            status: 'success',
            data: activity,
            message: 'User created successfully',
          });
    }
    catch (error) {
        console.error(error);
        res.json({
          status: 'error',
          data: null,
          message: error,
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
      const deleted = await User.findByIdAndRemove(req.params.id);
      res.json({
        status: 'success',
        data: deleted,
        message: 'User deleted successfully',
      });
    } catch (error) {
      console.error(error);
      res.json({
        status: 'error',
        data: null,
        message: error,
      });
    }
  };
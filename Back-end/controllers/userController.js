import User from "../models/userModel.js";

export const createUser = async (req, res) => {
      const { username, role} = req.body;
      try {
        const user = await User.create(req.body);
        res.status(200).json({
          message:user,
          status: 200,
          error: false,
        });
      } catch (error) {
        res.status(500).json({
          message: error,
          status: 500,
          error: true,
        });
      }
    }
  
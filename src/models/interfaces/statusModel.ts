import mongoose from "mongoose";
interface StatusModel extends mongoose.Document {
  _id: any;
  userId: string;
  user_info: {
    username: string;
    avatar: string;
    firstname: string;
    lastname: string;
  };
  content: string;
  comment_amount: number;
  likeAmoutn: number;
  create_time: number;
  update_time: number;
  delete_time: number;
}

export = StatusModel;


import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  email: string;
  firstName: string;
  lastName: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true},
  passwork: { type: String, required: true},
  phone: { type: String, required: true},
  address: { type: String, required: true},
  avatar: { type: String, required: true},
  role: [],
  permiss: [],
  createAt: { type: Number, default: Date.now},
  updateAt: { type: Number, default: null},
  deleteAt: { type: Number, default: null},
});

UserSchema.pre('save', function (next) {
  this.log('saving user...');
  next();
});

UserSchema.post('save', function (doc) {
  this.log('user saved!');
});

UserSchema.method('log', (message) => {
    console.log('log: ' + message);
});
// Export the model and return your IUser interface
export default mongoose.model<User>('User', UserSchema);
mongoose.model('User')
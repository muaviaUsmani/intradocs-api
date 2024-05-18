import { Injectable, Inject } from '@nestjs/common';
import { USER_MODEL } from '../models/user.schema';
import { Model } from 'mongoose';
import { User } from '../user.interfaces';
import { UserDTO, UserFilters } from '../user.dto';
import { hashText } from '../../../utilities/helpers/auth';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_MODEL)
    private userModel: Model<User>,
  ) {}

  async getUser(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  async createUser(user: UserDTO): Promise<User> {
    user.password = await hashText(user.password);
    return this.userModel.create(user);
  }

  async getUsers(filters: UserFilters): Promise<User[]> {
    const search = new RegExp(filters.search, 'i');
    let users = this.userModel.find({
      $or: [
        { firstName: search },
        { lastName: search },
        { email: search },
        { phoneNumber: search },
      ],
    });

    if (filters.ids) {
      users = users.where('id').in(filters.ids);
    }

    return users;
  }
}

import { ConflictException, Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async addUser(email: string): Promise<void> {
        const existingUser = await this.userRepository.findOne({ where: { email } });
        if (existingUser) {
          throw new ConflictException(`User with email ${email} already exists`);
        }
    
        const user = new User();
        user.email = email;
    
        await this.userRepository.save(user);
    }
    
    async getUser(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getUserById(userId: number): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { id: userId } });
    }
    
    async resetData(): Promise<void> {
        await this.userRepository.query('TRUNCATE TABLE "user" RESTART IDENTITY CASCADE');
    }

}

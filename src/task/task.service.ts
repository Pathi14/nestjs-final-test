import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        private userService: UserService,
    ) {}

    async addTask(name: string, userId: number, priority: number): Promise<void> {
        const user = await this.userService.getUserById(userId);
        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }

        const task = new Task();
        task.name = name;
        task.userId = userId;
        task.priority = priority;

        await this.taskRepository.save(task);
    }

    async getTaskByName(name: string): Promise<Task | undefined> {
        return this.taskRepository.findOne({ where: { name } });
    }

    async getUserTasks(userId: number): Promise<Task[]> {
        return this.taskRepository.find({ where: { userId: userId } });
    }

    async resetData(): Promise<void> {
        await this.taskRepository.query('TRUNCATE TABLE "task" RESTART IDENTITY CASCADE');
    }
}

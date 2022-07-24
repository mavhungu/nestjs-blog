import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService){}

  getUser(){
    return 'Mavhungu Ronewa';
  }
  getAll(){
    return this.prisma.user.findMany({});
  }
}

// import { Injectable } from '@nestjs/common';
// import { CreateAiDto } from './dto/create-ai.dto';
// import { UpdateAiDto } from './dto/update-ai.dto';

// @Injectable()
// export class AiService {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   create(createAiDto: CreateAiDto) {
//     return 'This action adds a new ai';
//   }

//   findAll() {
//     return `This action returns all ai`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} ai`;
//   }

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   update(id: number, updateAiDto: UpdateAiDto) {
//     return `This action updates a #${id} ai`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} ai`;
//   }
// }
// src/aiqa.service.ts
import { Injectable } from '@nestjs/common';
import AIQA from './aiqa'; // Assuming AIQA class is in aiqa.js

@Injectable()
export class AiService {
 private aiqaInstance: any;

 constructor() {
    this.initAiqa();
 }

 private async initAiqa() {
    const KEY = ""; 
    const CHUNK_SIZE = 800;
    const DOC = "./VaibhavDevkate"; // path to pdf file.pdf
    this.aiqaInstance = await new AIQA(KEY, CHUNK_SIZE, DOC);
 }

 async query(q: string, h: string): Promise<any> {
    return await this.aiqaInstance.query(q, h);
 }
}

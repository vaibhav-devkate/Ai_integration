import { Controller ,Get,Query} from '@nestjs/common';
import { AiService } from './ai.service';
// import { CreateAiDto } from './dto/create-ai.dto';
// import { UpdateAiDto } from './dto/update-ai.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get('query')
  async query(@Query('q') question: string, @Query('h') history: string): Promise<any> {
     const result = await this.aiService.query(question, history);
     return result;
  }

//   @Post()
//   create(@Body() createAiDto: CreateAiDto) {
//     return this.aiService.create(createAiDto);
//   }

//   @Get()
//   findAll() {
//     return this.aiService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.aiService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateAiDto: UpdateAiDto) {
//     return this.aiService.update(+id, updateAiDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.aiService.remove(+id);
//   }
 }

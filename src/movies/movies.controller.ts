import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This is the return';
  }

  @Get('search')
  search(@Query('year') yearCompleted: string) {
    return `Searching year ${yearCompleted}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This return one ${movieId}`;
  }

  @Post()
  create(@Body() movieInfo) {
    return movieInfo;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `This delete ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() movieInfo) {
    return {
      updateMovie: movieId,
      ...movieInfo,
    };
  }
}

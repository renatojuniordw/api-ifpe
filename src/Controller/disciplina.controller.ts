import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Disciplina } from './../Model/disciplina.models';
import { DisciplinaService } from './../Service/disciplina.service';

@Controller('disciplina')
export class DisciplinaController {

    constructor(
        private disciplinaService: DisciplinaService
    ) { }

    @Get('getAll')
    async getAll(): Promise<Disciplina[]> {
        return this.disciplinaService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param() params): Promise<Disciplina> {
        return this.disciplinaService.getById(params.id);
    }

    @Post('create')
    async create(@Body() body: Disciplina) {
        this.disciplinaService.create(body);
    }

    @Put('uptade')
    async uptade(@Body() body: Disciplina): Promise<[number, Disciplina[]]> {
        return this.disciplinaService.uptade(body);
    }

    @Delete('delete/:id')
    async delete(@Param() params) {
        return this.disciplinaService.delete(params.id);
    }
}

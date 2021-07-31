import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Disciplina } from './../Model/disciplina.models';
import { DisciplinaService } from './../Service/disciplina.service';

@Controller('disciplina')
export class DisciplinaController {

    constructor(
        private disciplinaService: DisciplinaService
    ) { }

    @Get()
    async getAll(): Promise<Disciplina[]> {
        return this.disciplinaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Disciplina> {
        return this.disciplinaService.getById(id);
    }

    @Post()
    async create(@Body() body: Disciplina) {
        this.disciplinaService.create(body);
    }

    @Put(':id')
    async uptade(@Body() body: Disciplina, @Param('id') id: number): Promise<[number, Disciplina[]]> {
        body.id = id;
        return this.disciplinaService.uptade(body);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.disciplinaService.delete(id);
    }
}

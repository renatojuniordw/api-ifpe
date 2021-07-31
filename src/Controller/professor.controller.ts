import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Professor } from './../Model/professor.models';
import { ProfessorService } from '../Service/professor.service';

@Controller('professor')
export class ProfessorController {
   
    constructor(
        private professorService: ProfessorService
    ) { }

    @Get()
    async getAll(): Promise<Professor[]> {
        return this.professorService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Professor> {
        return this.professorService.getById(id);
    }

    @Post()
    async create(@Body() body: Professor) {
        this.professorService.create(body);
    }

    @Put(':id')
    async uptade(@Body() body: Professor, @Param('id') id: number): Promise<[number, Professor[]]> {
        body.id = id;
        return this.professorService.uptade(body);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.professorService.delete(id);
    }
}

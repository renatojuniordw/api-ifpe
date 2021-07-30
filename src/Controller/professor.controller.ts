import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Professor } from './../Model/professor.models';
import { ProfessorService } from '../Service/professor.service';

@Controller('professor')
export class ProfessorController {
        constructor(
        private disciplinaService: ProfessorService
    ) { }

    @Get('getAll')
    async getAll(): Promise<Professor[]> {
        return this.disciplinaService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param() params): Promise<Professor> {
        return this.disciplinaService.getById(params.id);
    }

    @Post('create')
    async create(@Body() body: Professor) {
        this.disciplinaService.create(body);
    }

    @Put('uptade')
    async uptade(@Body() body: Professor): Promise<[number, Professor[]]> {
        return this.disciplinaService.uptade(body);
    }

    @Delete('delete/:id')
    async delete(@Param() params) {
        return this.disciplinaService.delete(params.id);
    }
}

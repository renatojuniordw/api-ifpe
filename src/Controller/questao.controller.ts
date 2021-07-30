import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Questao } from './../Model/questao.model';
import { QuestaoService } from './../Service/questao.service';

@Controller('questao')
export class QuestaoController {
    constructor(
        private disciplinaService: QuestaoService
    ) { }

    @Get('getAll')
    async getAll(): Promise<Questao[]> {
        return this.disciplinaService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param() params): Promise<Questao> {
        return this.disciplinaService.getById(params.id);
    }

    @Post('create')
    async create(@Body() body: Questao) {
        this.disciplinaService.create(body);
    }

    @Put('uptade')
    async uptade(@Body() body: Questao): Promise<[number, Questao[]]> {
        return this.disciplinaService.uptade(body);
    }

    @Delete('delete/:id')
    async delete(@Param() params) {
        return this.disciplinaService.delete(params.id);
    }
}

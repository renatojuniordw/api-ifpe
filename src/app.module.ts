import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppService } from './app.service';
import { QuestaoService } from './Service/questao.service';
import { ProfessorService } from './Service/professor.service';
import { DisciplinaService } from './Service/disciplina.service';

import { Questao } from './Model/questao.model';
import { Professor } from './Model/professor.models';
import { Disciplina } from './Model/disciplina.models';

import { AppController } from './app.controller';
import { DisciplinaController } from './Controller/disciplina.controller';
import { ProfessorController } from './Controller/professor.controller';
import { QuestaoController } from './Controller/questao.controller';

@Module({
    imports: [
        ConfigModule.forRoot(),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.DATABASE_URL,
            port: 3306,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE,
            autoLoadModels: true,
            synchronize: true
        }),
        SequelizeModule.forFeature([
            Professor,
            Disciplina,
            Questao
        ]),
    ],
    controllers: [
        AppController,
        DisciplinaController,
        ProfessorController,
        QuestaoController],
    providers: [
        AppService,
        ProfessorService,
        DisciplinaService,
        QuestaoService
    ],
})
export class AppModule { }

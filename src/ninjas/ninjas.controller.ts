import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
    // controllers are in charge of defining the paths 

    // GET /ninjas?type=fast --> []
     @Get() // we have to tell nestJS that is is a get request
    getNinjas(@Query('type') type: string) {
        return [{type}];
    }
    
    // GET /ninjas/:id --> {...}
    @Get(':id') // having :id defines the 
    getOneNinja(@Param('id') id: string) {
        return {
            id
        };
    }

    // POST (create ninjas) /ninjas
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return {
            name: createNinjaDto.name
        };
    }

    // PUT /ninjas/:id --> {...}
    @Put(':id')
    updateNinja(@Param(':id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        return {
            id,
            name: updateNinjaDto
        };
    }

    // DELETE /ninjas/:id
    @Delete()
    removeNinja(@Param(':id') id: string) {
        return{
            id
        };
    }
}
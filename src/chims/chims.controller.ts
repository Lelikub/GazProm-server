import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateChimsDto } from './dto/create-chims.dto';
import { UpdateProductDto } from './dto/update-chims.dto';
import { ChimsService } from './chims.service';

@Controller('chims')
export class ChimsController {

    constructor(private readonly chimsService: ChimsService){

    }

    @Get()
    getAll(){
        return this.chimsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id : string) : string{
        return 'getOne ' + id

    }

    @Post()
    create(@Body() CreateChimsDto: CreateChimsDto) {
        return this.chimsService.create(CreateChimsDto)
        //`Title: ${CreateChimsDto.tempr} Chims: ${CreateChimsDto.methane + CreateChimsDto.ethane + CreateChimsDto.propane}`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Del Chim ' + id
    }

    @Put(':id')
    update(@Body() updateChimsDto: UpdateProductDto, @Param('id') id: string){
        return "Update " + id
    }
}

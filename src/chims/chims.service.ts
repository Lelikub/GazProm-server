import { Injectable } from '@nestjs/common';
import { CreateChimsDto } from './dto/create-chims.dto';

@Injectable()
export class ChimsService {
    private chims = []

    getAll() {
        return this.chims
    }

    getById(id:string){
        return this.chims.find(p => p.id === id)
    }

    create(chimsDto: CreateChimsDto){
        this.chims.push({
            ...chimsDto,
            id: Date.now().toString()
        })
        return this.chims
    }
}

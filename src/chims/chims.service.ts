import { Injectable } from '@nestjs/common';
import { CreateChimsDto } from './dto/create-chims.dto';

@Injectable()
export class ChimsService {
    private chims = []
    private R : number = 8.31;

    chimCal(chimsDto: CreateChimsDto) {
        //let Ts: Number = 298;
        let t : number = Number(chimsDto.tempr)
        let R : number = 8.31;
        function Hf (a: number[]) : number {
            let H: number = (a[0] + a[1]*t/2 + a[2]*t^2/3 + a[3]*t^3/4 + a[4]*t^4/5 + a[5]/t)/(t*R)
            return H
        }
        let co2: number[] = [0.23568130E+01, 0.89841299E-02, 2-0.71220632E-05,  0.24573008E-08, -0.14288548E-12]
        
        let Q : number = Hf(co2)
        console.log(Q)
    }
    /*getAll() {
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
    }*/
}

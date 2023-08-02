import { Injectable } from '@nestjs/common';
import { CreateChimsDto } from './dto/create-chims.dto';

@Injectable()
export class ChimsService {
    private chims = []

    chimCal(chimsDto: CreateChimsDto) {
        //let Ts: Number = 298;
        let t : number = Number(chimsDto.tempr)
        let m : number = Number(chimsDto.methane)
        let e : number = Number(chimsDto.ethane)
        let p : number = Number(chimsDto.propane) 
        let R : number = 8.31;
        function Hf (a: number[]) : number {
            let H: number = (a[0] + a[1]*t/2 + a[2]*(t^2)/3 + a[3]*(t^3)/4 + a[4]*(t^4)/5 + a[5]/t)*(t*R)
            return H
        }
        let co2: number[] = [0.23568130E+01, 0.89841299E-02, -0.71220632E-05,  0.24573008E-08, -0.14288548E-12, -0.48371971E+05]
        let h2o : number[] = [7.25575005E+01, -6.62445402E-01, 2.56198746E-03, -4.36591923E-06, 2.78178981E-09, -4.18865499E+04]
        let met : number[] = [5.148257255554199, -0.013700241222977638, 0.0000493749430461, -0.0000000491952328, 0.0000000000170097, -10245.322265625]
        let eth : number[] =[4.291425704956055, -0.0055015492253005505, 0.0000599438462814, -0.0000000708466459, 0.0000000000268686, -11522.2060546875]
        let pro : number[] = [4.21093013, 0.00170886504, 0.0000706530164, -0.0000000920060565, 0.0000000000364618, -14381.0883 ]
        /*for(let i: number=0; i < 6; i++ ){
            console.log(co2)
        }*/
        console.log(Hf(met))
        let Q : number = 
        (Hf(co2) + 2 * Hf(h2o) - Hf(met)) * (m / 100) + 
        (Hf(co2) * 2 + Hf(h2o) * 3 - Hf(eth)) * (e / 100) + 
        (Hf(co2) * 3 + Hf(h2o) * 4 - Hf(pro)) * (p / 100)
        console.log(Q)
        return Q
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

import { Repository } from 'typeorm';
import { Comps } from './comps.entity';
export declare class CompsService {
    private comps;
    constructor(comps: Repository<Comps>);
    getAll(): Promise<Comps[]>;
    findComp(id: number): Promise<Comps>;
}

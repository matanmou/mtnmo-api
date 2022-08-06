import { CompsService } from './comps.service';
import { Comps } from './comps.entity';
export declare class CompsController {
    private readonly compsService;
    constructor(compsService: CompsService);
    getAllComps(): Promise<Comps[]>;
    getSpecificComp(id: number): Promise<Comps>;
}

import { Property } from "../data/property";

export abstract class PropertyRepository {
    public abstract get estate(): Property[]
    public abstract getProperty(id: String): Property|undefined

}

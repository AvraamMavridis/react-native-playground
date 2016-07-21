import { observable } from 'mobx';

export default class LocationStore
{

    addLocation( location )
    {
        this.locations.push( location );
        return this;
    }
}

import { observable } from 'mobx';

export default class LocationStore
{
    @observable locations = [];

    addLocation( location )
    {
        this.locations.push( location );
        return this;
    }
}

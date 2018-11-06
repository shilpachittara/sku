export class Errors
{
    context : string = "";
    map     : any    = {};
    size    : number = 0;

    reset() : void
    {
        this.context = "";
        this.map     = {};
        this.size    = 0;
    }

    setContext(context:string):void
    {
        this.context = context;
    }

    set(key:string, value:string) : void
    {
        if (value == null || value === undefined || value.trim().length === 0) {
            this.remove(this.context + key);
        }
        else {
            this.add(this.context + key, value);
        }
    }

    addAll(errors : Errors) : void
    {
        if (errors != null)
        {
            for (const key of Object.keys(errors.map)) {
                this.set(key, errors.map[key]);
            }
        }
    }

    private add(key:string, value:string) : void
    {
        if (!this.map.hasOwnProperty(key)) {
            this.size++;
        }

        this.map[key] = value;
    }

    private remove(key:string) : void
    {
        if (this.map.hasOwnProperty(key))
        {
            delete this.map[key];
            this.size--;
        }
    }
}

import {Injectable} from "@angular/core";
import { TnsSideDrawer } from 'nativescript-sidedrawer';

@Injectable()

export class TnsDrawer {

   

    private i : number ;
    public constructor() {
        this.buildDrawer();  
    }

    private buildDrawer()  {
        TnsSideDrawer.build({
          templates: [{
            title: 'Home',
            androidIcon: null,
            iosIcon: null,
          }],
          title: 'This App Name',
          subtitle: 'is just as awesome as this subtitle!',
          listener: (index) => {
            this.i = index
          },
          context: this,
        });
      }

  
}

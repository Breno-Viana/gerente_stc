import {Component, inject} from '@angular/core';

import {ControlPreviewComponent} from "./layouts/contropreview/contropreview.component";
import {ReportpreviewComponent} from "./layouts/reportpreview/reportpreview.component";
import {ResidentsPreviewComponent} from "./layouts/residentspreview/residentspreview.component";

@Component({
    selector: 'app-home',
    imports: [
        ControlPreviewComponent,
        ReportpreviewComponent,
        ResidentsPreviewComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}

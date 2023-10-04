import { Component } from '@angular/core';
import { CommonVariables } from '../common/common.variables';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  openLink(type: string) {
    var url;
    if (type === 'Instagram') {
      url = CommonVariables.instagramLink;
    } else if (type === 'Twitter') {
      url = CommonVariables.twitterLink
    }
    else if (type === 'YouTube') {
      url = CommonVariables.youTubeLink
    } else if (type === 'WhatsApp') {
      url = CommonVariables.whatsAppLink
    }
    window.open(url, "_blank");
  }
}
